import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Subject, System, SystemsContext } from "../common/interfaces";
import { fetchSubjects, fetchSystems } from "../supabase/supabaseClient";

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
    refreshData();
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
      </Stack>
    </SystemsContext.Provider>
  );
}
