import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  const plainDescription = (description || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const previewText =
    plainDescription.length > 118
      ? `${plainDescription.slice(0, 118)}...`
      : plainDescription;

  return (
    <article
      onClick={() => navigate(`/blog/${_id}`)}
      className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white shadow-[0_10px_26px_rgba(9,30,66,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(9,30,66,0.14)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--brand-primary)] backdrop-blur">
          {category}
        </span>
      </div>

      <div className="p-5">
        <h5 className="font-display min-h-14 text-lg leading-7 text-[var(--ink-900)]">
          {title}
        </h5>
        <p className="mt-2 min-h-18 text-sm leading-6 text-[var(--ink-muted)]">
          {previewText}
        </p>
        <span className="mt-4 inline-flex items-center rounded-full bg-[var(--brand-accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--brand-primary)]">
          Read article
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
