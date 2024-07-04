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
import Logo from "../../assets/images/white_logo_nobg.png";
import { LinearGradient } from "expo-linear-gradient";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        key="index"
        name="index"
        options={{
          headerTitle: () => (
            <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} />
              <Text style={styles.title}>MedZNotes</Text>
            </View>
          ),
          headerBackground: () => {
            return (
              <LinearGradient
                colors={["#4788C7", "#4788C7", "#ffffff"]}
                locations={[0, 0.952, 1]}
                style={styles.header}
              ></LinearGradient>
            );
          },
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
        key="more"
        name="about/more"
        options={{
          title: "Plus d'informations",
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
        key="collab"
        name="about/collab"
        options={{
          title: "Auteurs et collaboration",
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
        key="copyright"
        name="about/copyright"
        options={{
          title: "Références",
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
          title: "Termes d'utilisation",
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
        key="no_res"
        name="about/no_res"
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
    marginBottom: 21,
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
  },
  back: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
