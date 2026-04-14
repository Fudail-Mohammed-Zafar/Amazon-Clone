import { useState } from "react";
import BlogCard from "./BlogCard";
import { useAppContext } from "@/context/useAppContext";
import { blogCategories } from "@/assets/assets";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();
  const availableBlogs = Array.isArray(blogs) ? blogs : [];

  const searchableBlogs = () => {
    if (input === "") {
      return availableBlogs;
    }
    return availableBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase()),
    );
  };

  const visibleBlogs = searchableBlogs().filter((blog) =>
    menu === "All" ? true : blog.category === menu,
  );

  return (
    <section className="mx-auto w-[min(1120px,92%)] pb-12">
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              menu === item
                ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white"
                : "border-[var(--border-soft)] bg-white text-[var(--ink-muted)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mb-7 flex justify-center">
        <p className="text-sm text-[var(--ink-muted)]">
          {visibleBlogs.length} {visibleBlogs.length === 1 ? "article" : "articles"}
        </p>
      </div>

      {visibleBlogs.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[var(--border-soft)] bg-white px-6 py-12 text-center text-[var(--ink-muted)]">
          No blogs match your search yet. Try a different keyword.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogList;
