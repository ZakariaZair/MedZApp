import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import RenderHTML from "react-native-render-html";
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

  const source = {
    html: subject
      ? subject.rawData
      : "<p>Error - Reload app or call assistance</p>",
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.dataContainer}>
          <RenderHTML
            contentWidth={Dimensions.get("window").width}
            source={source}
          />
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
    marginHorizontal: 8,
  },
  title: {
    fontSize: 14,
  },
});
