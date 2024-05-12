import {
    Entypo,
    FontAwesome5,
    Ionicons,
    MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Logo from "../../assets/images/white_logo_nobg.png";

export default function TabsLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        key="index"
        name="index"
        options={{
          headerStyle: { backgroundColor: "#00035B" },
          headerTitle: () => {
            return (
              <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>MedXNotes</Text>
              </View>
            );
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"home"}
              size={focused ? 22 : 18 }
              color={focused ? "#0009BB" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        key="search"
        name="search"
        options={{
          headerTitle: "Barre de recherche",
          title: "",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#00035B"},
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"search"}
              size={focused ? 22 : 18 }
              color={focused ? "#0009BB" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        key="about"
        name="about"
        options={{
          headerTitle: "À propos",
          title: "",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#00035B" },
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={"info-with-circle"}
              size={focused ? 22 : 18 }
              color={focused ? "#0009BB" : "black"}
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
        key="subjects/[subjectName]"
        name="subjects/[subjectName]"
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
      <Tabs.Screen
        key="subjects/index"
        name="subjects/index"
        options={{
          title: "",
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#00035B",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    opacity: 1,
  },
  logo: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
