import { PostForm } from "../_components/PostForm";
import { createPost } from "../../actions";

async function handleCreate(_id: string | null, formData: FormData) {
  "use server";
  return createPost(formData);
}

export default function NewPostPage() {
  return <PostForm action={handleCreate} />;
}
