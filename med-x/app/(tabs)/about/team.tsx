import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Team() {
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

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});
