import { useAppContext } from "@/context/useAppContext";
import { Check, Trash } from "lucide-react";
import toast from "react-hot-toast";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this comment?",
      );
      if (!confirm) return;
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-b border-[var(--border-soft)] text-[var(--ink-muted)]">
      <td className="px-5 py-4 text-sm sm:px-6">
        <b className="font-medium text-[var(--ink-900)]">Blog</b> : {blog?.title || "Deleted Blog"}
        <br />
        <br />
        <b className="font-medium text-[var(--ink-900)]">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-[var(--ink-900)]">Comment</b> : {comment.content}
      </td>
      <td className="px-5 py-4 text-sm max-sm:hidden sm:px-6">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-5 py-4 sm:px-6">
        <div className="inline-flex items-center gap-2">
          {!comment.isApproved ? (
            <button
              onClick={approveComment}
              className="rounded-lg border border-[var(--border-soft)] p-1.5 text-[var(--ink-muted)] transition hover:border-emerald-200 hover:text-emerald-600"
              aria-label="Approve comment"
            >
              <Check className="h-4 w-4" />
            </button>
          ) : (
            <p className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Approved
            </p>
          )}
          <button
            onClick={deleteComment}
            className="rounded-lg border border-[var(--border-soft)] p-1.5 text-[var(--ink-muted)] transition hover:border-red-200 hover:text-red-600"
            aria-label="Delete comment"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
