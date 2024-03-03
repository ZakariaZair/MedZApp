import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../../assets/images/white_logo_nobg.png";
import { SystemsContext } from "../../../common/interfaces";
import RichTextEditor from "../../../components/richtexteditor";
import { modify } from "../../../supabase/supabaseClient";

export default function Configuration() {
  const { systems, subjects, refreshData } = React.useContext(SystemsContext);
  const [selectedSystemIndex, setSelectedSystemIndex] = useState(null);
  const [currentSubjectName, setSubjectName] = useState(null);
  const [content, setContent] = useState(
    "<p> Select a subject to view content </p>",
  );

  const toggleSystem = (index: number) => {
    if (selectedSystemIndex === index) {
      setSelectedSystemIndex(null);
    } else {
      setSelectedSystemIndex(index);
    }
  };

  const loadContent = (subjectName: string) => {
    const content = subjects.find(
      (subject) => subject.name === subjectName,
    ).rawData;
    setSubjectName(subjectName);
    setContent(content);
  };

  const save = () => {
    if (currentSubjectName && content) {
      modify(currentSubjectName, content).then(() => {
        refreshData();
      });
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
                  {system.subjects &&
                    system.subjects.length > 0 &&
                    system.subjects.map((subject, subjectIndex) => (
                      <View key={subjectIndex}>
                        <TouchableOpacity onPress={() => loadContent(subject)}>
                          <Text style={styles.subject}> {subject} </Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  {!system.subjects && (
                    <Text style={styles.subject}> No subjects found </Text>
                  )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.subjectTitle}>{currentSubjectName}</Text>
        <RichTextEditor content={content} onUpdate={setContent} />
        {currentSubjectName &&
          subjects.find((subject) => subject.name === currentSubjectName)
            .rawData !== content && (
            <Pressable style={styles.save} onPress={save}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          )}
      </View>
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
    borderBottomWidth: 5,
    borderBottomColor: "#000A4D",
  },
  subject: {
    padding: 10,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Courier",
    color: "white",
  },
  subjectTitle: {
    padding: 10,
    fontSize: 80,
    fontFamily: "Roman",
    color: "white",
  },
  contentContainer: {
    width: "80%",
    height: "100%",
    padding: 10,
    color: "white",
    alignItems: "center",
  },
  save: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "grey",
    borderStyle: "solid",
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
    fontSize: 40,
  },
});
