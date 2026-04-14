import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/useAppContext";
import BlogTableItem from "@/components/admin/BlogTableItem";
import { CalendarDays, FilePen, House, MessageCircleMore } from "lucide-react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const { axios } = useAppContext();

  const fetchDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("/api/admin/dashboard");
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const stats = [
    {
      label: "Total Blogs",
      value: dashboardData.blogs,
      icon: House,
      tone: "bg-[rgba(15,76,92,0.1)] text-[var(--brand-primary)]",
    },
    {
      label: "Total Comments",
      value: dashboardData.comments,
      icon: MessageCircleMore,
      tone: "bg-[rgba(255,141,92,0.18)] text-[#b04c1f]",
    },
    {
      label: "Drafts",
      value: dashboardData.drafts,
      icon: FilePen,
      tone: "bg-[rgba(64,82,109,0.15)] text-[#334155]",
    },
  ];

  const lastUpdated = new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="ui-animate-fade-up p-5 sm:p-7 lg:p-8"
      style={{ animationDelay: "60ms" }}
    >
      <div
        className="ui-animate-fade-up mb-6 flex flex-wrap items-start justify-between gap-3"
        style={{ animationDelay: "110ms" }}
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-[var(--brand-primary)]">
            OVERVIEW
          </p>
          <h1 className="font-display mt-1 text-2xl text-[var(--ink-900)] sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">
            Track your content performance and moderation workflow in one place.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface-main)] px-3 py-1 text-xs font-semibold text-[var(--ink-muted)]">
          <CalendarDays className="h-4 w-4 text-[var(--brand-primary)]" />
          Last updated {lastUpdated}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, tone }, index) => (
          <div
            key={label}
            className="ui-animate-fade-up rounded-2xl border border-[var(--border-soft)] bg-white p-5 shadow-[0_10px_22px_rgba(9,30,66,0.06)] transition-transform duration-200 hover:-translate-y-1"
            style={{ animationDelay: `${140 + index * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[var(--ink-muted)]">{label}</p>
              <span className={`rounded-xl p-2 ${tone}`}>
                <Icon className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-3 font-display text-3xl text-[var(--ink-900)]">{value}</p>
          </div>
        ))}
      </div>

      <section
        className="ui-animate-fade-up mt-8 overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-[0_10px_26px_rgba(9,30,66,0.06)]"
        style={{ animationDelay: "320ms" }}
      >
        <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-4 sm:px-6">
          <h2 className="font-display text-lg text-[var(--ink-900)] sm:text-xl">
            Latest Blogs
          </h2>
          <span className="rounded-full bg-[var(--surface-main)] px-3 py-1 text-xs font-semibold text-[var(--ink-muted)]">
            {dashboardData.recentBlogs.length} items
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--surface-main)] text-left text-xs uppercase tracking-wide text-[var(--ink-muted)]">
              <tr>
                <th scope="col" className="px-4 py-3 sm:px-5">
                  #
                </th>
                <th scope="col" className="px-4 py-3 sm:px-5">
                  Blog Title
                </th>
                <th scope="col" className="px-4 py-3 max-sm:hidden sm:px-5">
                  Date
                </th>
                <th scope="col" className="px-4 py-3 max-sm:hidden sm:px-5">
                  Status
                </th>
                <th scope="col" className="px-4 py-3 sm:px-5">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-sm text-[var(--ink-muted)]"
                  >
                    Loading dashboard...
                  </td>
                </tr>
              ) : dashboardData.recentBlogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-sm text-[var(--ink-muted)]"
                  >
                    No blogs available yet.
                  </td>
                </tr>
              ) : (
                dashboardData.recentBlogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
