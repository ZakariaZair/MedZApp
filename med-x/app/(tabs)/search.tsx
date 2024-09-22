import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Logo from "../../assets/icon.png";
import { SystemsContext } from "../../common/interfaces";

export default function Search() {
  const { systems } = React.useContext(SystemsContext);
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (text: string) => {
    setSearch(text.trim());
  };

  function highlightMatch(text: string, search: string) {
    const normedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normedSearch = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const index = normedText.toLowerCase().indexOf(normedSearch.toLowerCase());

    if (index >= 0) {
      const beforeMatch = text.slice(0, index);
      const match = text.slice(index, index + normedSearch.length);
      const afterMatch = text.slice(index + normedSearch.length);
      return (
        <Text style={styles.systemName}>
          {beforeMatch}
          <Text style={styles.highlight}>{match}</Text>
          {afterMatch}
        </Text>
      );
    }
    return text;
  }

  function findSystems(search: string) {
    const normedSearch = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return systems
      .filter((system) =>
        system.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(normedSearch),
      )
      .map((system, index) => (
        <Pressable
          key={index}
          onPress={() => router.push(`/systems/${system.name}`)} // assuming you have a unique 'id' field
          style={styles.searchResult}
        >
          {highlightMatch(system.name, search)}
        </Pressable>
      ));
  }

  function findSubjects(search: string) {
    const normedSearch = search
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return systems
      .filter((system) =>
        (system.subjects || []).some((subject) =>
          subject
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(normedSearch),
        ),
      )
      .map((system, index) => {
        const matchingSubject = (system.subjects || []).find((subject) =>
          subject.toLowerCase().includes(normedSearch),
        );

        return (
          <Pressable
            key={index}
            onPress={() => router.push(`/subjects/${matchingSubject}`)}
            style={styles.searchResult}
          >
            <Text style={styles.systemName}>
              {system.name} {"-> "}
            </Text>
            {matchingSubject && highlightMatch(matchingSubject, search)}
          </Pressable>
        );
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchBar, isFocused && styles.searchBarFocused]}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Recherchez"
          onChangeText={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          clearButtonMode="always"
        ></TextInput>
      </View>
      {search.length > 0 && (
        <ScrollView
          style={styles.searchResults}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.searchTitle}>
            <Text style={styles.searchTitleText}>Systèmes</Text>
          </View>
          {findSystems(search)}
          <View style={styles.searchTitle}>
            <Text style={styles.searchTitleText}>Sujets</Text>
          </View>
          {findSubjects(search)}
        </ScrollView>
      )}
      {search.length <= 0 && (
        <View style={styles.noContentContainer}>
          <Image
            source={Logo}
            style={{ width: 360, height: 360, opacity: 0.1 }}
          />
          <Text style={styles.noContentPlaceholder}>
            Recherchez un système ou un sujet
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
  },
  searchBar: {
    width: "90%",
    paddingHorizontal: 10,
    height: 35,
    borderColor: "gray",
    borderWidth: 0.4,
    borderRadius: 10,
    margin: 5,
  },
  searchBarFocused: {
    borderColor: "#4788C7",
    borderWidth: 2,
    elevation: 2,
  },
  searchResults: {
    width: "100%",
  },
  searchTitle: {
    width: "100%",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  searchTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchResult: {
    width: "100%",
    padding: 10,
    marginTop: 5,
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 10,
    flexDirection: "row",
  },
  systemName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subjectName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  noContentContainer: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  noContentPlaceholder: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 0.3,
  },
  highlight: {
    backgroundColor: "#00035B33",
    color: "blue",
    padding: 5,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 5,
  },
});
