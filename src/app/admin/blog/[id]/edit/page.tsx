import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/server";
import { PostForm } from "../../_components/PostForm";
import { updatePost } from "../../../actions";

async function handleUpdate(id: string | null, formData: FormData) {
  "use server";
  return updatePost(id!, formData);
}

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = createAdminClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) notFound();

  return <PostForm initialData={post} action={handleUpdate} />;
}
