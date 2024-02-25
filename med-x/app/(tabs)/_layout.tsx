import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Systems",
          title: "",
          headerShown: false,
          headerStyle: { backgroundColor: "white" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-outline" : "home"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "What do you need ?",
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "search" : "searchengin"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "... À propos ...",
          title: "",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={focused ? "info" : "info-with-circle"}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
