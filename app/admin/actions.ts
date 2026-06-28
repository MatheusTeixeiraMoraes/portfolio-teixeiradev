"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { ColorScheme, IconKey, MetricColor, ProjectMetric } from "@/types/project";

function parseMetrics(formData: FormData): ProjectMetric[] {
  const metrics: ProjectMetric[] = [];
  for (let i = 0; i < 3; i++) {
    const value = (formData.get(`metric_value_${i}`) as string)?.trim();
    const label = (formData.get(`metric_label_${i}`) as string)?.trim();
    const color = (formData.get(`metric_color_${i}`) as MetricColor) || "default";
    if (value && label) metrics.push({ value, label, color });
  }
  return metrics;
}

function parseProjectFromForm(formData: FormData) {
  return {
    order_index: Number(formData.get("order_index") ?? 0),
    reverse: formData.get("reverse") === "on",
    icon_key: formData.get("icon_key") as IconKey,
    color_scheme: formData.get("color_scheme") as ColorScheme,
    pill_label: formData.get("pill_label") as string,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    tags: (formData.get("tags") as string)
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    metrics: parseMetrics(formData),
    video_path: formData.get("video_path") as string,
  };
}

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("projects").insert(parseProjectFromForm(formData));
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient();
  await supabase.from("projects").update(parseProjectFromForm(formData)).eq("id", id);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  await supabase.from("projects").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
