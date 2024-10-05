import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addSource } from "../supabase/supabaseClient";
import { SystemsContext } from "../common/interfaces";

const AddSourceModal = ({ modalVisible, setModalVisible, subjectName }) => {
  const { subjects } = React.useContext(SystemsContext);
  const [sourceText, setSourceText] = useState("");
  const addSourceText = (sourceText: string) => {
    addSource(subjectName, sourceText).then(() => {
      const target = subjects.find((sub) => sub.name == subjectName);
      if (target) {
        target.sources = sourceText;
      }
    });
    setModalVisible(false);
  };

  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {!subjectName && <Text>Erreur</Text>}
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>
            Modifier les sources
          </Text>
          <View style={styles.addSource}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              {subjectName}
            </Text>
            <TextInput
              style={styles.input}
              multiline={true}
              onChangeText={(text) => setSourceText(text.trim())}
              defaultValue={
                subjects.find((sub) => sub.name == subjectName)?.sources
              }
            />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonAccept]}
              onPress={() => addSourceText(sourceText)}
            >
              <Text style={styles.buttonText}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    height: 400,
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  modalView: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    height: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addSource: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "80%",
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    elevation: 2,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAccept: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AddSourceModal;
