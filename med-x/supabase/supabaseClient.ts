import { createClient } from "@supabase/supabase-js";
import { Subject, System } from "../common/interfaces";
const NEXT_PUBLIC_SUPABASE_URL = "https://pjadtpxqyfglyqudlzyp.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYWR0cHhxeWZnbHlxdWRsenlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTg2MDIsImV4cCI6MjAyNDM5NDYwMn0.0lzXa7BKsO3S_G53D5uinWCH__Vm0hIfuprFuAXk6R8";

const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*
  FETCHING DATA :
  fetchSystems() - Fetches all systems from the database
  fetchSubjects() - Fetches all subjects from the database
*/

export async function fetchSystems(): Promise<System[]> {
  let { data, error } = await supabase.from("system").select("*");

  if (error) console.log("Error fetching data:", error);
  return data;
}

export async function fetchSubjects(): Promise<Subject[]> {
  let { data, error } = await supabase.from("subject").select("*");

  if (error) console.log("Error fetching data:", error);
  return data;
}

/*
  METHODS :
  modify() - Modifies the content of a subject
  addSubjectToSystem() - Adds a new subject to a system
  addSource() - Adds a new source for each subject
*/

export async function modify(
  subjectName: string,
  rawData: string,
): Promise<System> {
  const { data, error } = await supabase
    .from("subject")
    .update({ rawData: rawData })
    .eq("name", subjectName);

  if (error) {
    console.error("Error updating subject content:", error);
    return null;
  }
  return data;
}

export async function addSubjectToSystem(
  systemName: string,
  newSubjectName: string,
): Promise<Subject | null> {
  let { data: systemData } = await supabase
    .from("system")
    .select("subjects")
    .eq("name", systemName)
    .single();

  const currentSubjects = systemData.subjects || [];
  const updatedSubjects = [...currentSubjects, newSubjectName];

  const { error: updateError } = await supabase
    .from("system")
    .update({ subjects: updatedSubjects })
    .eq("name", systemName);

  if (updateError) {
    console.error("Error updating system:", updateError);
  }

  const { data: subjectData, error: subjectError } = await supabase
    .from("subject")
    .insert([{ name: newSubjectName, rawData: "" }])
    .single();

  if (subjectError) {
    console.error("Error inserting new subject:", subjectError);
    return null;
  }

  return subjectData as any;
}

export async function addSource(
  subjectName: string,
  sourceText: string,
): Promise<void> {
  const { error } = await supabase
    .from("subject")
    .update([{ sources: sourceText }])
    .eq("name", subjectName)
    .single();

  if (error) {
    console.error("Error inserting new source:", error);
  }
}
