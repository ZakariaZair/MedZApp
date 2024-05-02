import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SystemsContext } from '../common/interfaces';
import { addSubjectToSystem } from '../supabase/supabaseClient';


const AddSubjectModal = ({ modalVisible, setModalVisible, systemName }) => {
  const { refreshData } = React.useContext(SystemsContext);
  const [newSubjectName, setNewSubjectName] = useState("");
  const addSubject = () => {
    if (newSubjectName === "") {
      return;
    }
    console.log("Add subject");

    addSubjectToSystem(systemName, newSubjectName.trim()).then(() => {
      refreshData();
    });
    setModalVisible(false);
  };

  return (
    <Modal
      style={{display:"flex", justifyContent:"center", alignItems:"center"}}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {!systemName && <Text>Erreur</Text> }
          <Text style={{fontSize: 50, fontWeight: "bold"}}>{systemName}</Text>
          <View style={styles.addSubject}>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>Ajouter un sujet</Text>
            <TextInput
              style={{height: 40, width: "80%", borderColor: 'gray', borderWidth: 1, borderRadius: 10, margin: 10}}
              onChangeText={text => setNewSubjectName(text.trim())}
              placeholder="Nom du sujet"
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
              disabled={newSubjectName === ""}
              onPress={() => addSubject()}
            >
              <Text style={styles.buttonText}>Ajouter</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    width: "60%",
    height: "50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  addSubject: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    elevation: 2
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonAccept: {
    backgroundColor: "green",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default AddSubjectModal;
