"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, Trash2, Eye, EyeOff, Loader2 } from "lucide-react";
import { togglePublished, deletePost } from "../../actions";

interface Props {
  id: string;
  slug: string;
  published: boolean;
}

export function PostActions({ id, slug, published }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleToggle() {
    startTransition(async () => {
      await togglePublished(id, !published);
      router.refresh();
    });
  }

  function handleDelete() {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    startTransition(async () => {
      await deletePost(id);
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-1">
      {/* Toggle published */}
      <button
        onClick={handleToggle}
        disabled={isPending}
        title={published ? "Unpublish" : "Publish"}
        className="rounded-lg p-2 text-[#666] transition-colors hover:bg-white/5 hover:text-white disabled:opacity-40"
      >
        {isPending ? (
          <Loader2 size={15} className="animate-spin" />
        ) : published ? (
          <EyeOff size={15} />
        ) : (
          <Eye size={15} />
        )}
      </button>

      {/* Edit */}
      <Link
        href={`/admin/blog/${id}/edit`}
        className="rounded-lg p-2 text-[#666] transition-colors hover:bg-white/5 hover:text-white"
      >
        <Pencil size={15} />
      </Link>

      {/* Delete */}
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="rounded-lg p-2 text-[#666] transition-colors hover:bg-red-500/10 hover:text-red-400 disabled:opacity-40"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}
