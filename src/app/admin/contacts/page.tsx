import { createAdminClient } from "@/lib/supabase/server";
import { ContactCard } from "./_components/ContactCard";

export default async function ContactsPage() {
  const supabase = createAdminClient();
  const { data: submissions } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  const unread = submissions?.filter((s) => !s.read).length ?? 0;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Contact Messages
          {unread > 0 && (
            <span className="ml-3 rounded-full bg-[#c9932c]/10 px-2.5 py-0.5 text-sm font-semibold text-[#c9932c]">
              {unread} new
            </span>
          )}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {submissions?.length ?? 0} total message{submissions?.length !== 1 ? "s" : ""}
        </p>
      </div>

      {!submissions || submissions.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <p className="text-gray-400">No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((s) => (
            <ContactCard key={s.id} submission={s} />
          ))}
        </div>
      )}
    </div>
  );
}
