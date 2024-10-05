import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Ref() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/ref/source")}
      >
        <Text style={styles.title}>Sources</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/about/ref/icons")}
      >
        <Text style={styles.title}>Icônes</Text>
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
