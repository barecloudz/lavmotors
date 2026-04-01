"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

const RichTextEditor = dynamic(
  () => import("@/components/admin/RichTextEditor").then((m) => m.RichTextEditor),
  { ssr: false, loading: () => <div className="h-[320px] rounded-xl border border-gray-200 bg-gray-50 animate-pulse" /> }
);

interface PostData {
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  content?: string;
  date_published?: string;
  read_time?: string;
  published?: boolean;
}

interface Props {
  initialData?: PostData;
  action: (id: string | null, formData: FormData) => Promise<{ error?: string }>;
}

function slugify(title: string) {
  return title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#c9932c] focus:ring-2 focus:ring-[#c9932c]/10";
const labelClass = "block text-xs font-medium text-gray-600 mb-1.5";

export function PostForm({ initialData, action }: Props) {
  const isEditing = !!initialData?.id;
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [datePublished, setDatePublished] = useState(initialData?.date_published ?? new Date().toISOString().split("T")[0]);
  const [readTime, setReadTime] = useState(initialData?.read_time ?? "5 min read");
  const [published, setPublished] = useState(initialData?.published ?? false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!isEditing) setSlug(slugify(val));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const formData = new FormData();
    formData.set("title", title);
    formData.set("slug", slug);
    formData.set("description", description);
    formData.set("content", content);
    formData.set("date_published", datePublished);
    formData.set("read_time", readTime);
    formData.set("published", String(published));

    startTransition(async () => {
      const result = await action(initialData?.id ?? null, formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/admin/blog");
        router.refresh();
      }
    });
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Link href="/admin/blog" className="text-gray-400 transition-colors hover:text-gray-700">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-xl font-bold text-gray-900">{isEditing ? "Edit Post" : "New Blog Post"}</h1>
      </div>

      {error && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
        <div>
          <label className={labelClass}>Title</label>
          <input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)} required placeholder="Your post title" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Slug (URL)</label>
          <div className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-3 focus-within:border-[#c9932c] focus-within:ring-2 focus-within:ring-[#c9932c]/10">
            <span className="text-xs text-gray-400 shrink-0">/blog/</span>
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required placeholder="your-post-slug" className="flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 outline-none ml-1" />
          </div>
        </div>

        <div>
          <label className={labelClass}>Meta Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={2} placeholder="Brief description shown in search results" className={`${inputClass} resize-none`} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Date Published</label>
            <input type="date" value={datePublished} onChange={(e) => setDatePublished(e.target.value)} required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Read Time</label>
            <input type="text" value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="5 min read" className={inputClass} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Content</label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        {/* Published toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPublished(!published)}
            className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors ${published ? "bg-[#c9932c]" : "bg-gray-200"}`}
          >
            <span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${published ? "translate-x-5" : "translate-x-0"}`} />
          </button>
          <span className="text-sm text-gray-600">{published ? "Published" : "Draft — not visible on site"}</span>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8821e] disabled:opacity-50"
          >
            {isPending && <Loader2 size={14} className="animate-spin" />}
            {isEditing ? "Save Changes" : "Create Post"}
          </button>
          <Link href="/admin/blog" className="inline-flex items-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
