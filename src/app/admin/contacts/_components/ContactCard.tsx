"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp, Trash2, Mail, MailOpen, Loader2 } from "lucide-react";
import { markContactRead, deleteContact } from "../../actions";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  vehicle: string | null;
  message: string;
  read: boolean;
  created_at: string;
}

export function ContactCard({ submission }: { submission: Submission }) {
  const [expanded, setExpanded] = useState(!submission.read);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleToggleRead() {
    startTransition(async () => {
      await markContactRead(submission.id, !submission.read);
      router.refresh();
    });
  }

  function handleDelete() {
    if (!confirm("Delete this message? This cannot be undone.")) return;
    startTransition(async () => {
      await deleteContact(submission.id);
      router.refresh();
    });
  }

  return (
    <div className={`rounded-xl border bg-white overflow-hidden ${!submission.read ? "border-[#c9932c]/40" : "border-gray-200"}`}>
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="shrink-0 w-2">
          {!submission.read && <span className="block h-2 w-2 rounded-full bg-[#c9932c]" />}
        </div>

        <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
          <div className="min-w-0">
            <p className={`text-sm font-medium truncate ${submission.read ? "text-gray-600" : "text-gray-900"}`}>
              {submission.name}
            </p>
            <p className="text-xs text-gray-400 truncate">{submission.email}</p>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm text-gray-500 truncate">{submission.service || "General inquiry"}</p>
            {submission.vehicle && <p className="text-xs text-gray-400 truncate">{submission.vehicle}</p>}
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-xs text-gray-400">
              {new Date(submission.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </p>
            <p className="text-xs text-gray-300">
              {new Date(submission.created_at).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-gray-400">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="border-t border-gray-100 px-4 py-4">
          {/* Mobile metadata */}
          <div className="mb-4 grid grid-cols-2 gap-3 sm:hidden text-sm">
            {submission.service && (
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Service</p>
                <p className="text-gray-700">{submission.service}</p>
              </div>
            )}
            {submission.phone && (
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                <a href={`tel:${submission.phone}`} className="text-[#c9932c]">{submission.phone}</a>
              </div>
            )}
            {submission.vehicle && (
              <div className="col-span-2">
                <p className="text-xs text-gray-400 mb-0.5">Vehicle</p>
                <p className="text-gray-700">{submission.vehicle}</p>
              </div>
            )}
          </div>

          {/* Desktop metadata */}
          <div className="mb-4 hidden sm:flex items-center gap-6 text-sm">
            <a href={`mailto:${submission.email}`} className="text-[#c9932c] hover:underline">{submission.email}</a>
            {submission.phone && <a href={`tel:${submission.phone}`} className="text-gray-600 hover:text-gray-900">{submission.phone}</a>}
            {submission.vehicle && <span className="text-gray-500">{submission.vehicle}</span>}
          </div>

          {/* Message */}
          <div className="rounded-lg border border-gray-200 border-l-[#c9932c] border-l-2 bg-gray-50 px-4 py-3">
            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">{submission.message}</p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href={`mailto:${submission.email}?subject=Re: Your inquiry at LAV Motors`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#c9932c] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b8821e]"
            >
              <Mail size={14} />
              Reply
            </a>
            <button
              onClick={handleToggleRead}
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40"
            >
              {isPending ? <Loader2 size={14} className="animate-spin" /> : submission.read ? <Mail size={14} /> : <MailOpen size={14} />}
              {submission.read ? "Mark unread" : "Mark read"}
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="ml-auto inline-flex items-center rounded-lg border border-gray-200 p-2 text-gray-400 transition-colors hover:border-red-200 hover:text-red-500 disabled:opacity-40"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
