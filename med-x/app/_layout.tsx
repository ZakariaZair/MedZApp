import { Subject, System, SystemsContext } from "../common/interfaces";
import { Stack } from "expo-router";

const systems: System[] = [];
const subjects: Subject[] = [];

export default function RootLayout() {
  for (let i = 0; i < 4; i++) {
    subjects.push({ name: `subject: ${i}`, rawData: "subject" });
    systems.push({ name: `system: ${i}`, subjects: subjects });
  }

  return (
    <SystemsContext.Provider value={{ systems, subjects }}>
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
