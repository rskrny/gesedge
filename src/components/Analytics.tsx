"use client";

import { useEffect, useRef } from "react";
import { getSupabase } from "@/lib/supabase";

function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("ges_vid");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("ges_vid", id);
  }
  return id;
}

export default function Analytics() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    const supabase = getSupabase();
    if (!supabase) return;

    const path = window.location.pathname;
    // Don't track admin pages
    if (path.startsWith("/admin")) return;

    const referrer = document.referrer || null;
    const visitor_id = getVisitorId();
    const user_agent = navigator.userAgent;

    supabase
      .from("ges_page_views")
      .insert({ path, referrer, visitor_id, user_agent })
      .then(({ error }) => {
        if (error) console.error("Analytics error:", error);
      });
  }, []);

  return null;
}
