import { router } from "expo-router";
import React, { useEffect } from "react";
import {
    Image,
    Pressable,
    ScrollView, StatusBar, StyleSheet,
    Text,
    View
} from "react-native";
import { SystemsContext } from "../../common/interfaces";
import systemIcons from "../../components/systems_icons";

export default function Main() {
  const { systems } = React.useContext(SystemsContext);
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, [systems]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {systems.sort((a, b) => a.name.localeCompare(b.name)).map((system, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(`/systems/${system.name}`)}
            style={styles.system}
          >
            <Image source={{uri: systemIcons.icons.find(icon => icon.name == system.name).link, cache: "default"}} style={{width: 40, height: 40}} />
            <Text style={styles.systemName}>   {system.name}</Text>
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
    padding: 10,
    marginTop: 5,
    backfaceVisibility: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  systemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoContainer: {
    backgroundColor: "#00035B",
    width: "100%",
    paddingRight: "auto",
    paddingLeft: "auto",
    paddingTop: 40,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    opacity: 1,
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
