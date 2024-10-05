import React from "react";
import {
  StyleSheet,
  Text,
  Linking,
  ScrollView,
  Image,
  Pressable,
  View,
} from "react-native";
import systemIcons from "../../../../components/med-z-icons";

export default function Icons() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {systemIcons.icons.map((icon, index) => {
          return (
            <Pressable
              key={index}
              style={styles.ref}
              onPress={() => Linking.openURL(icon.link)}
            >
              <Text style={styles.text}>{icon.name}</Text>
              <Image
                source={{ uri: icon.link, cache: "default" }}
                style={styles.icon}
              />
            </Pressable>
          );
        })}
      </ScrollView>
      <Text
        style={styles.title}
        onPress={() => Linking.openURL("https://icons8.com")}
      >
        Icônes par Icons8
      </Text>
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
    fontSize: 14,
    textDecorationLine: "underline",
    color: "blue",
    textAlign: "center",
  },
  ref: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 2,
  },
});
