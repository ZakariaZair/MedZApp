import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        key="index"
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
        key="search"
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
        key="about"
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
      <Tabs.Screen
        key="config"
        name="admin/configuration"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        key="admin"
        name="admin/index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: () => (
            <MaterialIcons
              name="admin-panel-settings"
              size={24}
              color="black"
            />
          ),
          href: Platform.OS === "web" ? "/admin" : null,
        }}
      />
      <Tabs.Screen
        key="systems/[systemName]"
        name="systems/[systemName]"
        options={{
          title: "",
          href: null,
        }}
      />
      <Tabs.Screen
        key="systems/index"
        name="systems/index"
        options={{
          title: "",
          href: null,
        }}
      />
    </Tabs>
  );
}
