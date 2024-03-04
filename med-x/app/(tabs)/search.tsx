import { router } from "expo-router";
import { SystemsContext } from "../../common/interfaces";
import React from "react";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Search() {
  const { systems, subjects } = React.useContext(SystemsContext);
  const [search, setSearch] = useState("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  function findSystems(search: string) {
    return systems
      .filter((system) =>
        system.name.toLowerCase().includes(search.toLowerCase()),
      )
      .map((system, index) => (
        <Pressable
          key={index}
          onPress={() => router.push(`/systems/${system.name}`)} // assuming you have a unique 'id' field
          style={styles.searchResult}
        >
          <Text style={styles.systemName}>{system.name}</Text>
        </Pressable>
      ));
  }

  function findSubjects(search: string) {
    const lowerCaseSearch = search.toLowerCase();
    return systems
      .filter((system) =>
        (system.subjects || []).some((subject) =>
          subject.toLowerCase().includes(lowerCaseSearch),
        ),
      )
      .map((system, index) => {
        // Find the first subject that matches the search term
        const matchingSubject = (system.subjects || []).find((subject) =>
          subject.toLowerCase().includes(lowerCaseSearch),
        );

        return (
          <Pressable
            key={index}
            onPress={() => router.push(`/subjects/${matchingSubject}`)}
            style={styles.searchResult}
          >
            <Text style={styles.systemName}>{system.name}</Text>
            {matchingSubject && (
              <Text style={styles.subjectName}> → {matchingSubject}</Text>
            )}
          </Pressable>
        );
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={handleSearch}
      ></TextInput>
      <ScrollView style={styles.searchResults}>
        <Text style={styles.searchTitle}>Systems</Text>
        {search && findSystems(search)}
        <Text style={styles.searchTitle}>Subjects</Text>
        {search && findSubjects(search)}
        <Text style={styles.searchTitle}>Content</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    paddingHorizontal: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  searchResults: {
    width: "100%",
  },
  searchTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  searchResult: {
    padding: 10,
    marginTop: 5,
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 10,
    flexDirection: "row",
  },
  systemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
