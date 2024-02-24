import React from "react";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Subject() {
  const { subjectName } = useLocalSearchParams<{ subjectName: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>{subjectName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
