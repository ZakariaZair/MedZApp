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
import RenderHTML, {
  CustomBlockRenderer,
  defaultHTMLElementModels,
  HTMLContentModel,
  HTMLElementModel,
} from "react-native-render-html";
import { SystemsContext } from "../../../common/interfaces";

const handleLinkPress = (href: string) => {
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
          {isOpen ? "⏷ " : "⏵ "}
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
    <View style={styles.summaryText}>
      {props.tnode.children.map((child, index) => (
        <TDefaultRenderer key={index} tnode={child} {...props} />
      ))}
    </View>
  );
};

const aRenderer = ({ TDefaultRenderer, ...props }) => {
  return (
    <Pressable onPress={() => handleLinkPress(props.tnode.attributes.href)}>
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          fontSize: 14,
          margin: 0,
          padding: 0,
          marginBottom: -3,
        }}
      >
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
      headerTitleStyle: {
        fontWeight: "bold",
      },
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
            systemFonts={["San-Francisco", "sans-serif", "System"]}
          />
        </View>
      </ScrollView>
    </View>
  );
}

// IMPORTANT
// This is the style for the React Native content,
// so basically, it's for what's inside the return(),
// and what's inside the details/summary tags. It has highest priority.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dataContainer: {
    flex: 1,
    marginHorizontal: 2,
    marginBottom: 96,
  },
  back: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  detailsContainer: {
    padding: 0,
    margin: 0,
    // paddingHorizontal: 6,
    // marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  detailsContent: {
    margin: 0,
    padding: 0,
    marginBottom: 10,
    marginLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#000",
  },
  summaryContainer: {
    margin: 0,
    padding: 0,
    paddingHorizontal: 5,
    paddingVertical: 14.5,
  },
  summaryText: {
    padding: 0,
    margin: 0,
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 15,
  },
});

// Less Important
// This is style applied to everything BEFORE tagsStyles
//**** EDIT: This is not working, so I'm not using it ****//
// const baseStyle = {
//   fontFamily: Platform.select({
//     ios: "System",
//     android: "sans-serif",
//   }),
//   margin: 0,
//   padding: 0,
// };

// IMPORTANT
// This is the style for the HTML content,
// so basically, it's for the tags like p, h1, h2, etc.
// and for the rawData INSIDE each subject. (what HTMLRenderer uses)
const tagsStyles = {
  div: {
    margin: 0,
    marginBottom: 0,
  },
  hr: {
    margin: 0,
    padding: 0,
    marginTop: 32,
    paddingVertical: 0,
  },
  a: {
    fontSize: 16,
  },
  p: {
    // marginHorizontal: 0,
    // marginTop: -3,
    // marginBottom: 13,
    // paddingVertical: 0,
    // paddingHorizontal: 5,
    fontSize: 16,
    margin: 0,
    marginBottom: 0,
    marginLeft: 8,
  },
  ul: {
    // margin: 0,
    // marginBottom: 0,
    fontSize: 14,
    margin: 0,
    padding: 0,
    paddingLeft: 30,
  },
  li: {
    margin: 0,
    padding: 0,
  },
  h1: {
    // margin: 0,
    // marginBottom: 26,
    // padding: 0,
    fontSize: 20,
    margin: 0,
    paddingLeft: 10,
    paddingBottom: 16,
    paddingTop: 8,
  },
  h2: {
    // margin: 0,
    // marginBottom: 22,
    // padding: 0,
    fontSize: 18,
    margin: 0,
    paddingLeft: 10,
    paddingBottom: 0,
    paddingTop: 0,
  },
  /*
  **
    H3 is not to be used until we say again
  **
  */
  h3: {
    // margin: 0,
    // marginBottom: 18,
    // padding: 0,
    fontSize: 30,
    margin: 0,
    padding: 0,
    color: "#ff0000",
  },
};
