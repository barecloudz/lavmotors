"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// ── Blog Posts ────────────────────────────────────────────────────

export async function createPost(formData: FormData): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const slug = (formData.get("slug") as string).trim();
  const { error } = await supabase.from("blog_posts").insert({
    slug,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    date_published: formData.get("date_published") as string,
    read_time: formData.get("read_time") as string,
    published: formData.get("published") === "true",
  });
  if (error) return { error: error.message };
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");
  return {};
}

export async function updatePost(id: string, formData: FormData): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const slug = (formData.get("slug") as string).trim();
  const { error } = await supabase.from("blog_posts").update({
    slug,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    date_published: formData.get("date_published") as string,
    read_time: formData.get("read_time") as string,
    published: formData.get("published") === "true",
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");
  return {};
}

export async function deletePost(id: string): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  return {};
}

export async function togglePublished(id: string, published: boolean): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("blog_posts").update({ published, updated_at: new Date().toISOString() }).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  return {};
}

// ── Contact Submissions ───────────────────────────────────────────

export async function markContactRead(id: string, read: boolean): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("contact_submissions").update({ read }).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/contacts");
  revalidatePath("/admin");
  return {};
}

export async function deleteContact(id: string): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/contacts");
  revalidatePath("/admin");
  return {};
}

// ── Vehicles ─────────────────────────────────────────────────────

export async function createVehicle(formData: FormData): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const photosRaw = (formData.get("photos") as string) ?? "";
  const photos = photosRaw.split("\n").map((u) => u.trim()).filter(Boolean);
  const { error } = await supabase.from("vehicles").insert({
    year: parseInt(formData.get("year") as string),
    make: formData.get("make") as string,
    model: formData.get("model") as string,
    trim: (formData.get("trim") as string) || null,
    mileage: formData.get("mileage") ? parseInt(formData.get("mileage") as string) : null,
    price: formData.get("price") ? parseInt(formData.get("price") as string) : null,
    description: (formData.get("description") as string) || null,
    photos,
    status: formData.get("status") as string,
    featured: formData.get("featured") === "true",
  });
  if (error) return { error: error.message };
  revalidatePath("/vehicles");
  revalidatePath("/admin/vehicles");
  return {};
}

export async function updateVehicle(id: string, formData: FormData): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const photosRaw = (formData.get("photos") as string) ?? "";
  const photos = photosRaw.split("\n").map((u) => u.trim()).filter(Boolean);
  const { error } = await supabase.from("vehicles").update({
    year: parseInt(formData.get("year") as string),
    make: formData.get("make") as string,
    model: formData.get("model") as string,
    trim: (formData.get("trim") as string) || null,
    mileage: formData.get("mileage") ? parseInt(formData.get("mileage") as string) : null,
    price: formData.get("price") ? parseInt(formData.get("price") as string) : null,
    description: (formData.get("description") as string) || null,
    photos,
    status: formData.get("status") as string,
    featured: formData.get("featured") === "true",
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/vehicles");
  revalidatePath("/admin/vehicles");
  return {};
}

export async function deleteVehicle(id: string): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("vehicles").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/vehicles");
  revalidatePath("/admin/vehicles");
  return {};
}

// ── Site Settings ─────────────────────────────────────────────────

export async function updateSetting(key: string, value: string): Promise<{ error?: string }> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("site_settings").upsert({ key, value, updated_at: new Date().toISOString() });
  if (error) return { error: error.message };
  revalidatePath("/");
  revalidatePath("/vehicles");
  return {};
}
