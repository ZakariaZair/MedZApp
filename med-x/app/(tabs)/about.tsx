import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Fondé en 2024 par le comité de développement médical (CDM)
      </Text>
      <Text style={styles.subtitle}>Oumaima Zair</Text>
      <Text style={styles.subtitle}>Zakaria Zair</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15,
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
