import { fetchSystems, fetchSubjects } from "../supabase/supabaseClient";
import { Subject, System, SystemsContext } from "../common/interfaces";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [systems, setSystems] = useState<System[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const refreshData = () => {
    fetchSystems()
      .then(setSystems)
      .catch((error) => {
        console.error("Failed to fetch systems:", error);
      });

    fetchSubjects()
      .then(setSubjects)
      .catch((error) => {
        console.error("Failed to fetch subjects:", error);
      });
  };

  useEffect(() => {
    fetchSystems()
      .then(setSystems)
      .catch((error) => {
        console.error("Failed to fetch systems:", error);
      });

    fetchSubjects()
      .then(setSubjects)
      .catch((error) => {
        console.error("Failed to fetch subjects:", error);
      });
  }, []);

  return (
    <SystemsContext.Provider value={{ systems, subjects, refreshData }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: "Back",
            headerShown: false,
          }}
        />
        <Stack.Screen name="subjects/[subjectName]" />
      </Stack>
    </SystemsContext.Provider>
  );
}
