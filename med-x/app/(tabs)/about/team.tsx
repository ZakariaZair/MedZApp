import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Team() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fondé en 2024 par</Text>
      <Text style={styles.subtitle}>Oumaima Zair et Zakaria Zair</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
});
