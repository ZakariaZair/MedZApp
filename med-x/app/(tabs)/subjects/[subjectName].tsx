import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import {
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import RenderHTML from "react-native-render-html";
import { SystemsContext } from "../../../common/interfaces";

export default function Subject() {
  const { subjectName } = useLocalSearchParams<{ subjectName: string }>();
  const { systems, subjects } = React.useContext(SystemsContext);
  const subject = subjects.find((subject) => subject.name === subjectName);
  const system = systems.find((system) => system.subjects && system.subjects.find((subject: string) =>  subject === subjectName ));

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: subjectName,
      headerLeft: () => (
        <Pressable onPress={() => router.push(`/systems/${system.name}`)}>
          <Text style={styles.back}>Retour</Text>
        </Pressable>
      ),
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "#4788C7" },
    });
  }, [navigation, subjectName]);

  const source = {
    html: subject
      ? subject.rawData
      : "<p>Error - Reload app or call for assistance</p>",
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
  back: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
