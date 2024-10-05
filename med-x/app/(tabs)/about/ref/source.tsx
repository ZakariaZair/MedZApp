import React, { useState } from "react";
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
import { SystemsContext } from "../../../../common/interfaces";

export default function Source() {
  const { systems, subjects } = React.useContext(SystemsContext);
  const [systemIndex, toggleSystemIndex] = useState(-1);

  const toggleSystem = (index: number) => {
    toggleSystemIndex(systemIndex === index ? -1 : index);
  };

  const findSource = (subjectName: string) => {
    return subjects.find((sub) => sub.name === subjectName).sources;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {systems &&
          systems.map((system, i) => {
            return (
              <View key={i}>
                <Pressable
                  style={styles.toggle}
                  onPress={() => toggleSystem(i)}
                >
                  <Text style={styles.title}>{system.name}</Text>
                </Pressable>
                {systemIndex === i &&
                  system.subjects &&
                  system.subjects.map((subjectName, j) => {
                    return (
                      <View key={j}>
                        <Text style={styles.subtitle}>{subjectName}</Text>
                        <Text style={styles.source}>
                          {findSource(subjectName) && findSource(subjectName)}
                        </Text>
                      </View>
                    );
                  })}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 16,
  },
  source: {
    fontSize: 12,
    paddingLeft: 10,
  },
});
