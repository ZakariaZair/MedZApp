import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RenderHTML, {
  CustomBlockRenderer,
  defaultHTMLElementModels,
  HTMLContentModel,
  HTMLElementModel,
} from "react-native-render-html";
import { SystemsContext } from "../../../common/interfaces";

const handleLinkPress = (href: string) => {
  console.log(href);
  if (href.startsWith("app://")) {
    const routeName = href.replace("app://", "");
    router.push(routeName);
  }
};

const customHTMLElementModels = {
  ...defaultHTMLElementModels,
  details: HTMLElementModel.fromCustomModel({
    tagName: "details",
    contentModel: HTMLContentModel.block,
  }),
  summary: HTMLElementModel.fromCustomModel({
    tagName: "summary",
    contentModel: HTMLContentModel.mixed,
  }),
};

const DetailsRenderer: CustomBlockRenderer = ({
  TDefaultRenderer,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.detailsContainer}>
      <Pressable onPress={toggleOpen} style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          {props.tnode.children[0]?.children[0]?.data || ">"}
        </Text>
      </Pressable>
      {isOpen && (
        <View style={styles.detailsContent}>
          {props.tnode.children.slice(1).map((child, index) => (
            <TDefaultRenderer key={index} tnode={child} {...props} />
          ))}
        </View>
      )}
    </View>
  );
};

const SummaryRenderer: CustomBlockRenderer = ({
  TDefaultRenderer,
  ...props
}) => {
  return (
    <Text style={styles.summaryText}>
      {props.tnode.children.map((child, index) => (
        <TDefaultRenderer key={index} tnode={child} {...props} />
      ))}
    </Text>
  );
};

const aRenderer = ({ TDefaultRenderer, ...props }) => {
  console.log(props);
  return (
    <Pressable onPress={() => handleLinkPress(props.tnode.attributes.href)}>
      <Text style={{ color: "blue", textDecorationLine: "underline" }}>
        {props.tnode.data}
      </Text>
    </Pressable>
  );
};

const customRenderers = {
  details: DetailsRenderer,
  summary: SummaryRenderer,
  a: aRenderer,
};

export default function Subject() {
  const { subjectName } = useLocalSearchParams<{ subjectName: string }>();
  const { systems, subjects } = React.useContext(SystemsContext);
  const subject = subjects.find((subject) => subject.name === subjectName);
  const system = systems.find(
    (system) =>
      system.subjects &&
      system.subjects.find((subject: string) => subject === subjectName),
  );

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
            tagsStyles={tagsStyles}
            source={source}
            customHTMLElementModels={customHTMLElementModels}
            renderers={customRenderers}
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
    marginHorizontal: 2,
  },
  title: {
    fontSize: 14,
  },
  back: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  detailsContainer: {
    padding: 8,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    marginHorizontal: 10,
  },
  summaryContainer: {
    paddingHorizontal: 2,
  },
  summaryText: {
    fontWeight: "bold",
  },
  detailsContent: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  text: {
    fontFamily: Platform.select({
      ios: "System",
      android: "sans-serif",
    }),
  },
});

const tagsStyles = {
  div: {
    ...styles.text,
  },
  ul: {
    paddingLeft: 15,
    margin: 0,

    ...styles.text,
  },
  p: {
    margin: 0,
    padding: 0,

    ...styles.text,
  },
  h1: {
    margin: 0,
    padding: 0,

    ...styles.text,
  },
  h2: {
    margin: 0,
    padding: 0,

    ...styles.text,
  },
  h3: {
    margin: 0,
    padding: 0,

    ...styles.text,
  },
  details: {
    fontFamily: "SanFrancisco",
  },
  summary: {
    fontFamily: "SanFrancisco",
  },
};
