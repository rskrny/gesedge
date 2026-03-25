"use client";

import { useState, useEffect, useCallback } from "react";

type Tab = "overview" | "submissions" | "analytics";

interface Summary {
  submissions: { total: number; unread: number };
  page_views: { today: number; week: number };
}

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string | null;
  service: string;
  message: string;
  status: string;
  created_at: string;
  read_at: string | null;
  archived_at: string | null;
}

interface AnalyticsData {
  total_views: number;
  unique_visitors: number;
  days: number;
  by_day: [string, number][];
  by_path: [string, number][];
  by_referrer: [string, number][];
}

function LoginScreen({ onLogin }: { onLogin: (pw: string) => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    onLogin(pw);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center">GES Admin</h1>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
          autoFocus
        />
        {error && <p className="text-red-400 text-sm">Invalid password</p>}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: number | string; sub?: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
      <div className="text-sm text-white/50 mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
      {sub && <div className="text-xs text-white/40 mt-1">{sub}</div>}
    </div>
  );
}

function BarChart({ data, maxBars = 30 }: { data: [string, number][]; maxBars?: number }) {
  const sliced = data.slice(-maxBars);
  const max = Math.max(...sliced.map(([, v]) => v), 1);

  return (
    <div className="flex items-end gap-1 h-32">
      {sliced.map(([label, value]) => (
        <div key={label} className="flex-1 flex flex-col items-center gap-1 min-w-0">
          <div
            className="w-full bg-blue-500/70 rounded-t transition-all"
            style={{ height: `${(value / max) * 100}%`, minHeight: value > 0 ? 4 : 0 }}
            title={`${label}: ${value}`}
          />
          <span className="text-[9px] text-white/30 truncate w-full text-center">
            {label.slice(5)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [summary, setSummary] = useState<Summary | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  const apiFetch = useCallback(async (view: string, extraParams = "") => {
    if (!token) return null;
    const res = await fetch(`/api/admin?view=${view}${extraParams}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.status === 401) {
      setToken(null);
      setAuthError(true);
      return null;
    }
    return res.json();
  }, [token]);

  const handleLogin = useCallback(async (pw: string) => {
    // Test the password by hitting the API
    const res = await fetch("/api/admin?view=summary", {
      headers: { Authorization: `Bearer ${pw}` },
    });
    if (res.status === 401) {
      setAuthError(true);
      return;
    }
    setAuthError(false);
    setToken(pw);
    sessionStorage.setItem("ges_admin_token", pw);
    const data = await res.json();
    setSummary(data);
  }, []);

  // Restore session
  useEffect(() => {
    const saved = sessionStorage.getItem("ges_admin_token");
    if (saved) {
      setToken(saved);
    }
  }, []);

  // Fetch data on tab change
  useEffect(() => {
    if (!token) return;
    setLoading(true);

    if (tab === "overview") {
      apiFetch("summary").then((d) => { if (d) setSummary(d); setLoading(false); });
    } else if (tab === "submissions") {
      apiFetch("submissions").then((d) => { if (d) setSubmissions(d.submissions); setLoading(false); });
    } else if (tab === "analytics") {
      apiFetch("analytics", "&days=30").then((d) => { if (d) setAnalytics(d); setLoading(false); });
    }
  }, [token, tab, apiFetch]);

  const markRead = async (id: number) => {
    if (!token) return;
    await fetch("/api/admin", {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ id, action: "read" }),
    });
    setSubmissions((prev) => prev.map((s) => s.id === id ? { ...s, status: "read", read_at: new Date().toISOString() } : s));
  };

  const archiveSubmission = async (id: number) => {
    if (!token) return;
    await fetch("/api/admin", {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ id, action: "archive" }),
    });
    setSubmissions((prev) => prev.map((s) => s.id === id ? { ...s, status: "archived", archived_at: new Date().toISOString() } : s));
    setSelectedSubmission(null);
  };

  if (!token) return <LoginScreen onLogin={handleLogin} />;

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "submissions", label: "Submissions" },
    { key: "analytics", label: "Analytics" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">GES Admin</h1>
        <button
          onClick={() => { setToken(null); sessionStorage.removeItem("ges_admin_token"); }}
          className="text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          Sign out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-white/5 rounded-lg p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              tab === t.key ? "bg-blue-600 text-white" : "text-white/50 hover:text-white/70"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading && <div className="text-center text-white/30 py-12">Loading...</div>}

      {/* Overview Tab */}
      {!loading && tab === "overview" && summary && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Submissions" value={summary.submissions.total} />
          <StatCard label="Unread" value={summary.submissions.unread} />
          <StatCard label="Views Today" value={summary.page_views.today} />
          <StatCard label="Views (7d)" value={summary.page_views.week} />
        </div>
      )}

      {/* Submissions Tab */}
      {!loading && tab === "submissions" && (
        <div className="space-y-2">
          {submissions.length === 0 && (
            <div className="text-center text-white/30 py-12">No submissions yet</div>
          )}
          {submissions.filter((s) => s.status !== "archived").map((s) => (
            <button
              key={s.id}
              onClick={() => { setSelectedSubmission(s); if (!s.read_at) markRead(s.id); }}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                !s.read_at
                  ? "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">
                  {!s.read_at && <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2" />}
                  {s.name}
                  {s.company && <span className="text-white/40 ml-2">at {s.company}</span>}
                </div>
                <span className="text-xs text-white/30">
                  {new Date(s.created_at).toLocaleDateString()}
                </span>
              </div>
              <div className="text-sm text-white/50 mt-1 truncate">{s.message}</div>
              <div className="text-xs text-white/30 mt-1">{s.service} · {s.email}</div>
            </button>
          ))}

          {/* Submission detail modal */}
          {selectedSubmission && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={() => setSelectedSubmission(null)}>
              <div className="bg-[#111827] border border-white/10 rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">{selectedSubmission.name}</h2>
                  <button onClick={() => setSelectedSubmission(null)} className="text-white/40 hover:text-white">✕</button>
                </div>
                <div className="space-y-3 text-sm">
                  <div><span className="text-white/40">Email:</span> <a href={`mailto:${selectedSubmission.email}`} className="text-blue-400 hover:underline">{selectedSubmission.email}</a></div>
                  {selectedSubmission.company && <div><span className="text-white/40">Company:</span> {selectedSubmission.company}</div>}
                  <div><span className="text-white/40">Service:</span> {selectedSubmission.service}</div>
                  <div><span className="text-white/40">Date:</span> {new Date(selectedSubmission.created_at).toLocaleString()}</div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-white/40 mb-2">Message:</div>
                    <div className="whitespace-pre-wrap">{selectedSubmission.message}</div>
                  </div>
                  <div className="pt-3 flex gap-2">
                    <a
                      href={`mailto:${selectedSubmission.email}?subject=Re: Your inquiry to Global Edge Strategies`}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-medium transition-colors"
                    >
                      Reply
                    </a>
                    <button
                      onClick={() => archiveSubmission(selectedSubmission.id)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                    >
                      Archive
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Analytics Tab */}
      {!loading && tab === "analytics" && analytics && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Total Views (30d)" value={analytics.total_views} />
            <StatCard label="Unique Visitors (30d)" value={analytics.unique_visitors} />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-sm text-white/50 mb-3">Views per Day</h3>
            {analytics.by_day.length > 0 ? (
              <BarChart data={analytics.by_day} />
            ) : (
              <div className="text-white/30 text-center py-8">No data yet</div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm text-white/50 mb-3">Top Pages</h3>
              {analytics.by_path.slice(0, 10).map(([path, count]) => (
                <div key={path} className="flex justify-between py-1 text-sm">
                  <span className="truncate text-white/70">{path}</span>
                  <span className="text-white/40 ml-2">{count}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm text-white/50 mb-3">Top Referrers</h3>
              {analytics.by_referrer.length > 0 ? (
                analytics.by_referrer.slice(0, 10).map(([ref, count]) => (
                  <div key={ref} className="flex justify-between py-1 text-sm">
                    <span className="truncate text-white/70">{ref}</span>
                    <span className="text-white/40 ml-2">{count}</span>
                  </div>
                ))
              ) : (
                <div className="text-white/30 text-sm">No referrer data yet</div>
              )}
            </div>
          </div>
        </div>
      )}

      {authError && (
        <div className="text-red-400 text-sm text-center mt-4">Authentication failed. Please sign in again.</div>
      )}
    </div>
  );
}
