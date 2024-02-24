import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Placeholderimage from "../assets/images/white_logo_nobg.png";
import { router } from "expo-router";

const systems: string[] = [
  "Cardiologie",
  "Endocrinologie",
  "Néphrologie",
  "Neurologie",
  "Pédiatrie",
];

export default function Main() {
  return (
    <View style={styles.container}>
      <Image source={Placeholderimage} style={styles.owl} />
      <View style={styles.systems}>
        {systems.map((name, index) => (
          <View key={index} style={styles.system}>
            <Pressable onPress={() => router.push(`/systems/${name}`)}>
              <Text>{name}</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  systems: {
    flex: 1,
    justifyContent: "flex-start",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  system: {
    padding: 10,
    marginTop: 5,
    backgroundColor: "grey",
    borderRadius: 8,
    fontSize: 64,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  imgContainer: {
    paddingTop: 0,
  },
  owl: {
    backgroundColor: "#318ce7",
    width: 50,
    height: 50,
  },
});
