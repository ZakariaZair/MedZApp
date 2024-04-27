import { Ionicons, Octicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SystemsContext } from "../../../common/interfaces";
import RichTextEditor from "../../../components/richtexteditor";
import { modify } from "../../../supabase/supabaseClient";

export default function Configuration() {
  const { systems, subjects, refreshData } = React.useContext(SystemsContext);
  const [selectedSystemIndex, setSelectedSystemIndex] = useState(null);
  const [currentSubjectName, setSubjectName] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarPosition = useRef(new Animated.Value(-300)).current;
  const sidebarTogglePosition = useRef(new Animated.Value(0)).current;
  const [content, setContent] = useState(
    "<p> Sélectionnez un sujet pour commencer ! </p>",
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Animated.spring(sidebarPosition, {
      toValue: isOpen ? 0 : -300,
      useNativeDriver: true,
    }).start();

    Animated.spring(sidebarTogglePosition, {
        toValue: isOpen ? -300 : 0,
        useNativeDriver: true,
      }).start();
  }, [isOpen]);

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
      <Animated.View style={[styles.toggleSiderbar, { transform: [{ translateX: sidebarTogglePosition }] }]}>
          <Pressable onPress={toggleSidebar}>
            <Octicons name="three-bars" size={40} color="white" />
          </Pressable>
      </Animated.View>
      <Animated.View style={[styles.sidebar, {
        transform: [{ translateX: sidebarPosition }]
      }]}>
        <Pressable onPress={toggleSidebar}>
          <Ionicons name="arrow-back" style={{color:"#333"}} size={60} color="white" />
        </Pressable>
        <ScrollView style={styles.systems}>
          {systems.sort().map((system, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => toggleSystem(index)}>
                <Text style={styles.system}> {system.name} </Text>
              </TouchableOpacity>
              {selectedSystemIndex === index && (
                <View style={styles.subject}>
                  {system.subjects &&
                    system.subjects.length > 0 &&
                    system.subjects.sort().map((subject, subjectIndex) => (
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
      </Animated.View>
      <View style={styles.contentContainer}>
        {currentSubjectName && <Text style={styles.subjectTitle}>{currentSubjectName}</Text> }
        {currentSubjectName && <RichTextEditor content={content} onUpdate={setContent} /> }
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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebar: {
    flex: 1,
    position: 'absolute',
    width: 300,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 0,
    top: 0,
  },
  logoContainer: {
    width: "100%",
    height: "15%",
    display: "flex",
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
    color: "black",
    borderBottomWidth: 5,
    borderBottomColor: "#000A4D",
  },
  subject: {
    padding: 10,
    marginLeft: 20,
    fontSize: 20,
    color: "black",
  },
  subjectTitle: {
    padding: 10,
    fontSize: 40,
    fontFamily: "Roman",
    color: "black",
  },
  contentContainer: {
    width: "80%",
    height: "100%",
    padding: 10,
    color: "black",
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
  toggleSiderbar: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
    },
});
