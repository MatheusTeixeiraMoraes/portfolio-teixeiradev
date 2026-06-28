import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updateProject } from "./actions";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import type { Project } from "@/types/project";

export default async function AdminPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data } = await supabase.from("projects").select("*").order("order_index", { ascending: true });
  const projects = (data ?? []) as Project[];

  const updateActions = Object.fromEntries(
    projects.map((p) => [p.id, updateProject.bind(null, p.id)])
  );

  return <AdminDashboard projects={projects} updateActions={updateActions} />;
}
