import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SystemsContext } from "../../../common/interfaces";

export default function System() {
  const { systemName } = useLocalSearchParams<{ systemName: string }>();
  const { systems } = React.useContext(SystemsContext);
  const system = systems.find((system) => system.name === systemName);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: systemName,
      headerLeft: () => (
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>Retour</Text>
        </Pressable>
      ),
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "#4788C7" },
      headerTitleStyle: {
        fontWeight: "bold",
      },
    });
  }, [navigation, systemName]);

  if (!system || !system.subjects) {
    return <Text style={styles.errorText}>À venir</Text>;
  } else {
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
  errorText: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  back: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
