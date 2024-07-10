import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/more")}
      >
        <Text style={styles.title}>Plus d'informations</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/team")}
      >
        <Text style={styles.title}>Notre équipe</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/collab")}
      >
        <Text style={styles.title}>Auteurs et Collaborateurs</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/copyright")}
      >
        <Text style={styles.title}>Références</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/terms")}
      >
        <Text style={styles.title}>Termes {"&"} Conditions</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/no_res")}
      >
        <Text style={styles.title}>Politique de Confidentialité</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 8,
    textAlign: "center",
    fontStyle: "italic",
    borderTopColor: "black",
    borderTopWidth: 5,
  },
});
