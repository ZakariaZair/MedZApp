import { Ionicons, Octicons } from "@expo/vector-icons";
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
import AddSubjectModal from "../../../components/addSubject";
import RichTextEditor from "../../../components/richtexteditor";
import { modify } from "../../../supabase/supabaseClient";

export default function Configuration() {
  const { systems, subjects, refreshData } = React.useContext(SystemsContext);
  const [selectedSystemIndex, setSelectedSystemIndex] = useState(null);
  const [currentSystemName, setSystemName] = useState(null);
  const [currentSubjectName, setSubjectName] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarPosition = useRef(new Animated.Value(-300)).current;
  const sidebarTogglePosition = useRef(new Animated.Value(0)).current;
  const [content, setContent] = useState(
    "<p> Sélectionnez un sujet pour commencer ! </p>",
  );
  const [addModalVisible, setAddModalVisible] = useState(false);

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
      setSystemName(systems[index].name);
    }
  };

  const loadContent = (systemName: string) => {
    const content = subjects.find(
      (system) => system.name === systemName,
    ).rawData;
    setSubjectName(systemName);
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
      <AddSubjectModal
        modalVisible={addModalVisible}
        setModalVisible={setAddModalVisible}
        systemName={currentSystemName}
      />
      <Animated.View
        style={[
          styles.toggleSiderbar,
          { transform: [{ translateX: sidebarTogglePosition }] },
        ]}
      >
        <Pressable onPress={toggleSidebar}>
          <Octicons name="three-bars" size={30} color="white" />
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: sidebarPosition }],
          },
        ]}
      >
        <Pressable onPress={toggleSidebar}>
          <Ionicons
            name="arrow-back"
            style={{ color: "#333" }}
            size={60}
            color="white"
          />
        </Pressable>
        <ScrollView style={styles.systems}>
          {systems
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((system, index) => (
              <View key={index}>
                <Pressable onPress={() => toggleSystem(index)}>
                  <Text
                    style={[
                      styles.system,
                      {
                        backgroundColor:
                          selectedSystemIndex === index ? "#00000044" : null,
                      },
                    ]}
                  >
                    {" "}
                    {system.name}{" "}
                  </Text>
                </Pressable>
                {selectedSystemIndex === index && (
                  <View style={styles.subject}>
                    {system.subjects &&
                      system.subjects.length > 0 &&
                      system.subjects.map((subject, subjectIndex) => (
                        <View key={subjectIndex}>
                          <TouchableOpacity
                            style={{ width: "100%" }}
                            onPress={() => loadContent(subject)}
                          >
                            <Text style={styles.subject}> {subject} </Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                    {!system.subjects && (
                      <Text style={[styles.subject, { color: "red" }]}>
                        {" "}
                        Pas de sujets !!!{" "}
                      </Text>
                    )}
                    <Pressable
                      onPress={() => setAddModalVisible(!addModalVisible)}
                    >
                      <Text style={[styles.subject, { color: "#00035B" }]}>
                        {" "}
                        Ajouter +{" "}
                      </Text>
                    </Pressable>
                  </View>
                )}
              </View>
            ))}
        </ScrollView>
      </Animated.View>
      <View style={styles.contentContainer}>
        <Text style={styles.subjectTitle}>{currentSubjectName}</Text>
        <RichTextEditor
          key={currentSubjectName}
          content={content}
          onUpdate={setContent}
        />
        {currentSubjectName &&
          subjects.find((subject) => subject.name === currentSubjectName)
            .rawData !== content && (
            <Pressable style={styles.save} onPress={save}>
              <Text style={styles.saveText}>Sauvegarder</Text>
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
    backgroundColor: "#E5E4E2",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebar: {
    flex: 1,
    position: "absolute",
    width: 300,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    left: 0,
    top: 0,
    zIndex: 3,
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
  },
  system: {
    width: "100%",
    fontSize: 25,
    paddingVertical: 20,
    color: "black",
    borderBottomWidth: 1.4,
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
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textShadowColor: "black",
    textShadowRadius: 10,
  },
  toggleSiderbar: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
});
