import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/useAppContext";
import BlogTableItem from "@/components/admin/BlogTableItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [axios]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="ui-animate-fade-up p-5 sm:p-7 lg:p-8" style={{ animationDelay: "60ms" }}>
      <div className="ui-animate-fade-up mb-6" style={{ animationDelay: "120ms" }}>
        <p className="text-xs font-semibold tracking-[0.15em] text-[var(--brand-primary)]">
          CONTENT
        </p>
        <h1 className="font-display mt-1 text-2xl text-[var(--ink-900)] sm:text-3xl">
          All Blogs
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          Manage all published and draft posts from one table.
        </p>
      </div>

      <div
        className="ui-animate-fade-up overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-[0_10px_24px_rgba(9,30,66,0.06)]"
        style={{ animationDelay: "200ms" }}
      >
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
              {blogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-sm text-[var(--ink-muted)]"
                  >
                    No blogs found.
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchBlogs}
                    index={index + 1}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
