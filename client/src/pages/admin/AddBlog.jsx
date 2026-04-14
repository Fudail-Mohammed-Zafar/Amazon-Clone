import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import toast from "react-hot-toast";
import { parse } from "marked";
import { useAppContext } from "@/context/useAppContext";
import { blogCategories } from "@/assets/assets";
import { UploadCloud } from "lucide-react";

const AddBlog = () => {
  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", {
        prompt: title,
      });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        setSubTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    // Intitate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="ui-animate-fade-up p-5 text-[var(--ink-muted)] sm:p-7 lg:p-8"
      style={{ animationDelay: "60ms" }}
    >
      <div className="ui-animate-fade-up mb-6" style={{ animationDelay: "120ms" }}>
        <p className="text-xs font-semibold tracking-[0.15em] text-[var(--brand-primary)]">
          CREATE
        </p>
        <h1 className="font-display mt-1 text-2xl text-[var(--ink-900)] sm:text-3xl">
          Add New Blog
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          Draft a post, generate AI-assisted content, and publish when ready.
        </p>
      </div>

      <div
        className="ui-animate-fade-up w-full max-w-4xl rounded-2xl border border-[var(--border-soft)] bg-white p-5 shadow-[0_10px_24px_rgba(9,30,66,0.06)] sm:p-7"
        style={{ animationDelay: "200ms" }}
      >
        <p className="font-medium text-[var(--ink-900)]">Upload thumbnail</p>
        <label htmlFor="image">
          {!image ? (
            <div className="mt-3 flex h-24 w-full max-w-md items-center justify-center rounded-xl border border-dashed border-[var(--border-soft)] bg-[var(--surface-main)] text-[var(--ink-muted)] cursor-pointer transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
              <UploadCloud size={28} />
            </div>
          ) : (
            <img
              src={URL.createObjectURL(image)}
              alt="upload_area"
              className="mt-3 h-24 rounded-xl cursor-pointer object-cover"
            />
          )}


          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-6 font-medium text-[var(--ink-900)]">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="mt-2 w-full max-w-2xl rounded-xl border border-[var(--border-soft)] bg-white p-3 outline-none transition focus:border-[var(--brand-primary)]"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4 font-medium text-[var(--ink-900)]">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="mt-2 w-full max-w-2xl rounded-xl border border-[var(--border-soft)] bg-white p-3 outline-none transition focus:border-[var(--brand-primary)]"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        <p className="mt-4 font-medium text-[var(--ink-900)]">Blog Description</p>
        <div className="relative max-w-3xl pb-16 pt-2 sm:pb-10">
          <div ref={editorRef}></div>
          {loading && (
            <div className="absolute inset-0 mt-2 flex items-center justify-center bg-black/10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-t-white"></div>
            </div>
          )}
          <button
            disabled={loading}
            className="absolute bottom-1 right-1 ml-2 rounded-lg bg-[var(--brand-primary)] px-4 py-1.5 text-xs text-white transition hover:bg-[var(--brand-primary-dark)] cursor-pointer"
            type="button"
            onClick={generateContent}
          >
            Generate with AI
          </button>
        </div>

        <p className="mt-4 font-medium text-[var(--ink-900)]">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          className="mt-2 rounded-xl border border-[var(--border-soft)] px-3 py-2 text-[var(--ink-muted)] outline-none transition focus:border-[var(--brand-primary)]"
        >
          <option value="">Select category</option>
          {blogCategories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <div className="mt-5 flex items-center gap-2">
          <p className="font-medium text-[var(--ink-900)]">Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 h-11 w-40 rounded-xl bg-[var(--brand-primary)] text-sm font-semibold text-white transition hover:bg-[var(--brand-primary-dark)] cursor-pointer"
        >
          {isAdding ? "Adding" : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
