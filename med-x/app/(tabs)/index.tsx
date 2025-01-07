import { router, useFocusEffect } from "expo-router";
import React, { useEffect } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SystemsContext } from "../../common/interfaces";
import systemIcons from "../../components/med-z-icons";

export default function Main() {
  const { systems } = React.useContext(SystemsContext);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, [systems]);

  useFocusEffect(() => {
    if (Platform.OS === "web" && process.env.NODE_ENV === "production") {
      const t = setTimeout(() => {
        if (!(window.location.pathname === "/MedZApp")) {
          window.history.replaceState(
            { additionalInformation: "Updating" },
            "Home",
            window.location.href + "MedZApp",
          );
        }
        clearTimeout(t);
      }, 200);
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {systems
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter((s) => s.subjects && s.subjects.length > 0)
          .map((system, index) => (
            <Pressable
              key={index}
              onPress={() => router.push(`/systems/${system.name}`)}
              style={styles.system}
            >
              <Image
                source={{
                  uri: systemIcons.icons.find(
                    (icon) => icon.name == system.name,
                  ).link,
                  cache: "default",
                }}
                style={styles.systemLogo}
              />
              <Text style={styles.systemName}> {system.name}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "auto",
  },
  system: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    paddingBottom: 10,
    marginTop: 5,
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  systemName: {
    fontSize: 18,
    paddingHorizontal: 8,
    fontWeight: "bold",
  },
  systemLogo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
