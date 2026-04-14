import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/useAppContext";
import CommentTableItem from "@/components/admin/CommentTableItem";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const { axios } = useAppContext();

  const fetchComments = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/admin/comments");
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }, [axios]);

  const filteredComments = comments.filter((comment) => {
    if (filter === "Approved") return comment.isApproved === true;
    return comment.isApproved === false;
  });

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div className="ui-animate-fade-up p-5 sm:p-7 lg:p-8" style={{ animationDelay: "60ms" }}>
      <div
        className="ui-animate-fade-up mb-6 flex flex-wrap items-start justify-between gap-3"
        style={{ animationDelay: "120ms" }}
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-[var(--brand-primary)]">
            MODERATION
          </p>
          <h1 className="font-display mt-1 text-2xl text-[var(--ink-900)] sm:text-3xl">
            Comments
          </h1>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">
            Review audience feedback and approve thoughtful responses.
          </p>
        </div>

        <div className="flex gap-2 rounded-full border border-[var(--border-soft)] bg-white p-1">
          <button
            onClick={() => setFilter("Approved")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filter === "Approved"
                ? "bg-[var(--brand-primary)] text-white"
                : "text-[var(--ink-muted)] hover:text-[var(--ink-900)]"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filter === "Not Approved"
                ? "bg-[var(--brand-primary)] text-white"
                : "text-[var(--ink-muted)] hover:text-[var(--ink-900)]"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>
      <div
        className="ui-animate-fade-up overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-[0_10px_24px_rgba(9,30,66,0.06)]"
        style={{ animationDelay: "200ms" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[var(--surface-main)] text-left text-xs uppercase tracking-wide text-[var(--ink-muted)]">
              <tr>
                <th scope="col" className="px-5 py-3 sm:px-6">
                  Blog Title & Comments
                </th>
                <th scope="col" className="px-5 py-3 max-sm:hidden sm:px-6">
                  Date
                </th>
                <th scope="col" className="px-5 py-3 sm:px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-5 py-8 text-center text-sm text-[var(--ink-muted)] sm:px-6"
                  >
                    No comments in this filter.
                  </td>
                </tr>
              ) : (
                filteredComments.map((comment, index) => (
                  <CommentTableItem
                    key={comment._id}
                    comment={comment}
                    index={index + 1}
                    fetchComments={fetchComments}
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

export default Comments;
