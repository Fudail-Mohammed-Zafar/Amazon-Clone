import { useAppContext } from "@/context/useAppContext";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?",
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post(`/api/blog/delete`, { id: blog._id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post(`/api/blog/toggle-publish`, {
        id: blog._id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <tr className="border-b border-[var(--border-soft)] text-[var(--ink-muted)]">
      <th className="px-4 py-4 text-left text-sm font-semibold text-[var(--ink-900)] sm:px-5">
        {index}
      </th>
      <td className="max-w-[360px] px-4 py-4 text-sm font-medium text-[var(--ink-900)] sm:px-5">
        {title}
      </td>
      <td className="px-4 py-4 max-sm:hidden sm:px-5">{BlogDate.toDateString()}</td>
      <td className="px-4 py-4 max-sm:hidden sm:px-5">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
            blog.isPublished
              ? "bg-emerald-50 text-emerald-700"
              : "bg-amber-50 text-amber-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </span>
      </td>
      <td className="px-4 py-4 sm:px-5">
        <div className="flex items-center gap-2">
        <button
          onClick={togglePublish}
          className="rounded-lg border border-[var(--border-soft)] px-2.5 py-1 text-xs font-medium transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
        >
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
          <button
            onClick={deleteBlog}
            className="rounded-lg border border-[var(--border-soft)] p-1.5 text-[var(--ink-muted)] transition hover:border-red-200 hover:text-red-600"
            aria-label="Delete blog"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BlogTableItem;
