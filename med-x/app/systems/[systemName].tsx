import { SystemsContext } from "../../common/interfaces";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function System() {
  const { systemName } = useLocalSearchParams<{ systemName: string }>();
  const { systems } = React.useContext(SystemsContext);
  const system = systems.find((system) => system.name === systemName);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: systemName,
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "#00035B" },
    });
  }, [navigation, systemName]);

  return (
    <View style={styles.subjectsContainer}>
      <ScrollView>
        {system.subjects.map((subject, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(`/subjects/${subject}`)}
            style={styles.subject}
          >
            <Text style={styles.subjectName}>{subject}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subjectsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "auto",
  },
  subject: {
    padding: 10,
    marginTop: 5,
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 10,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
