import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";

// Simple password auth — checked against env var
function isAuthorized(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;
  const token = authHeader.slice(7);
  return token === process.env.GES_ADMIN_PASSWORD;
}

// GET /api/admin?view=submissions|analytics|summary
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getServiceClient();
  if (!db) {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const view = searchParams.get("view") || "summary";

  if (view === "submissions") {
    const { data, error } = await db
      .from("ges_contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ submissions: data });
  }

  if (view === "analytics") {
    const days = parseInt(searchParams.get("days") || "30");
    const since = new Date(Date.now() - days * 86400000).toISOString();

    const { data: viewsFull } = await db
      .from("ges_page_views")
      .select("path, created_at, referrer, visitor_id")
      .gte("created_at", since);

    const byDay: Record<string, number> = {};
    const byPath: Record<string, number> = {};
    const byReferrer: Record<string, number> = {};
    const uniqueVisitors = new Set<string>();

    for (const v of viewsFull || []) {
      const day = v.created_at.slice(0, 10);
      byDay[day] = (byDay[day] || 0) + 1;
      byPath[v.path] = (byPath[v.path] || 0) + 1;
      if (v.referrer) byReferrer[v.referrer] = (byReferrer[v.referrer] || 0) + 1;
      uniqueVisitors.add(v.visitor_id);
    }

    return NextResponse.json({
      total_views: viewsFull?.length || 0,
      unique_visitors: uniqueVisitors.size,
      days,
      by_day: Object.entries(byDay).sort(([a], [b]) => a.localeCompare(b)),
      by_path: Object.entries(byPath).sort(([, a], [, b]) => b - a),
      by_referrer: Object.entries(byReferrer).sort(([, a], [, b]) => b - a),
    });
  }

  // Default: summary
  const { count: submissionCount } = await db
    .from("ges_contact_submissions")
    .select("*", { count: "exact", head: true });

  const { count: unreadCount } = await db
    .from("ges_contact_submissions")
    .select("*", { count: "exact", head: true })
    .is("read_at", null);

  const today = new Date().toISOString().slice(0, 10);
  const { count: todayViews } = await db
    .from("ges_page_views")
    .select("*", { count: "exact", head: true })
    .gte("created_at", today);

  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  const { count: weekViews } = await db
    .from("ges_page_views")
    .select("*", { count: "exact", head: true })
    .gte("created_at", weekAgo);

  return NextResponse.json({
    submissions: { total: submissionCount || 0, unread: unreadCount || 0 },
    page_views: { today: todayViews || 0, week: weekViews || 0 },
  });
}

// PATCH /api/admin — mark submission read/archived
export async function PATCH(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getServiceClient();
  if (!db) {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 });
  }

  const { id, action } = await request.json();

  if (action === "read") {
    const { error } = await db
      .from("ges_contact_submissions")
      .update({ read_at: new Date().toISOString(), status: "read" })
      .eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else if (action === "archive") {
    const { error } = await db
      .from("ges_contact_submissions")
      .update({ archived_at: new Date().toISOString(), status: "archived" })
      .eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
