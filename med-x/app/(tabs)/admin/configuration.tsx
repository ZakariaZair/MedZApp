import { SystemsContext } from "../../../common/interfaces";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Logo from "../../../assets/images/white_logo_nobg.png";

export default function Configuration() {
  const { systems, subjects } = React.useContext(SystemsContext);
  const [selectedSystemIndex, setSelectedSystemIndex] = useState(null);
  const [content, setContent] = useState(null);

  const loadContent = (subjectName: string) => {
    const content = subjects.find(
      (subject) => subject.name === subjectName,
    ).rawData;
    setContent(content);
  };

  const toggleSystem = (index: number) => {
    if (selectedSystemIndex === index) {
      setSelectedSystemIndex(null);
    } else {
      setSelectedSystemIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <ScrollView style={styles.systems}>
          {systems.map((system, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => toggleSystem(index)}>
                <Text style={styles.system}> {system.name} </Text>
              </TouchableOpacity>
              {selectedSystemIndex === index && (
                <View style={styles.subject}>
                  {system.subjects.map((subject, subjectIndex) => (
                    <View key={subjectIndex}>
                      <TouchableOpacity onPress={() => loadContent(subject)}>
                        <Text style={styles.subject}> {subject} </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.content}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebar: {
    flex: 1,
    width: "20%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRightWidth: 3,
    borderRightColor: "white",
  },
  logoContainer: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 3,
  },
  logo: {
    width: 150,
    height: 150,
  },
  systems: {
    width: "100%",
    height: "85%",
  },
  system: {
    fontSize: 25,
    paddingVertical: 20,
    fontFamily: "Courier",
    color: "white",
  },
  subject: {
    padding: 10,
    fontSize: 20,
    fontFamily: "Courier",
    color: "white",
  },
  content: {
    width: "80%",
    height: "100%",
    padding: 10,
    color: "white",
  },
});
