import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SystemsContext } from "../../common/interfaces";

export default function Subject() {
  const { subjectName } = useLocalSearchParams<{ subjectName: string }>();
  const { subjects } = React.useContext(SystemsContext);
  const subject = subjects.find((subject) => subject.name === subjectName);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: subjectName,
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "#00035B" },
    });
  }, [navigation, subjectName]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>{subject.rawData}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dataContainer: {
    flex: 1,
    //backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    color: "red",
  },
});
