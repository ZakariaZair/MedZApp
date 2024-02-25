import { createClient } from "@supabase/supabase-js";
NEXT_PUBLIC_SUPABASE_URL = "https://pjadtpxqyfglyqudlzyp.supabase.co";
NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYWR0cHhxeWZnbHlxdWRsenlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MTg2MDIsImV4cCI6MjAyNDM5NDYwMn0.0lzXa7BKsO3S_G53D5uinWCH__Vm0hIfuprFuAXk6R8";

const supabaseUrl = NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchData() {
  let { data, error } = await supabase.from("system").select("*");

  if (error) console.log("Error fetching data:", error);
  else console.log("Data:", data);
}
