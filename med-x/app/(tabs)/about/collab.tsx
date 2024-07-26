import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Collab() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Bientôt disponible !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});
