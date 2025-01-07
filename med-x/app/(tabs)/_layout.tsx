import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TabsLayout() {
  const gradiator = () => {
    return (
      <LinearGradient
        colors={["#4788C7", "#4788E7", "#4788F7"]}
        locations={[0, 0.5, 1]}
        style={styles.header}
      ></LinearGradient>
    );
  };

  return (
    <Tabs>
      <Tabs.Screen
        key="index"
        name="index"
        options={{
          headerTitle: () => (
            <View style={styles.logoContainer}>
              {/*<Image source={Logo} style={styles.logo} />*/}
              <Text style={styles.title}>MedZNotes</Text>
            </View>
          ),
          headerBackground: gradiator,
          title: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"home"}
              size={focused ? 22 : 18}
              color={focused ? "#4788C7" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        key="search"
        name="search"
        options={{
          headerTitle: "Barre de recherche",
          headerBackground: gradiator,
          title: "",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={"search"}
              size={focused ? 22 : 18}
              color={focused ? "#4788C7" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        key="about"
        name="about/index"
        options={{
          headerTitle: "À propos",
          headerBackground: gradiator,
          title: "",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={"info-with-circle"}
              size={focused ? 22 : 18}
              color={focused ? "#4788C7" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        key="mission"
        name="about/mission"
        options={{
          title: "Mission",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="team"
        name="about/team"
        options={{
          title: "Notre équipe",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="terms"
        name="about/terms"
        options={{
          title: "Conditions d'utilisation",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="disclaimer"
        name="about/disclaimer"
        options={{
          title: "Avis de non-responsabilité",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="policy"
        name="about/policy"
        options={{
          title: "Politique de confidentialité",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="ref"
        name="about/ref/index"
        options={{
          headerTitle: "Références",
          href: null,
          title: "",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="source"
        name="about/ref/source"
        options={{
          title: "Sources",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about/ref")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        key="icons"
        name="about/ref/icons"
        options={{
          title: "Icônes",
          href: null,
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#4788C7" },
          headerLeft: () => (
            <Pressable onPress={() => router.push("about/ref")}>
              <Text style={styles.back}>Retour</Text>
            </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    opacity: 1,
    marginBottom: 11,
  },
  logo: {
    width: 37,
    height: 37,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 25,
  },
  back: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
