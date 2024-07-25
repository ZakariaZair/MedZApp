import React from "react";
import { StyleSheet, Text, ScrollView, Linking, Pressable } from "react-native";

export default function No_res() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Politique de Confidentialité</Text>
      <Text style={styles.paragraph}>
        This privacy policy applies to the MedZNotes app (hereby referred to as
        "Application") for mobile devices that was created by Zakaria Zair
        (hereby referred to as "Service Provider") as a Free service. This
        service is intended for use "AS IS".
      </Text>
      <Text style={styles.header}>Information Collection and Use</Text>
      <Text style={styles.paragraph}>
        The Application collects information when you download and use it. This
        information may include information such as :
      </Text>
      <Text style={styles.bullet}>
        Your device's Internet Protocol address (e.g. IP address){" "}
      </Text>
      <Text style={styles.bullet}>
        The pages of the Application that you visit, the time and date of your
        visit, the time spent on those pages
      </Text>
      <Text style={styles.bullet}>The time spent on the Application</Text>
      <Text style={styles.bullet}>
        The operating system you use on your mobile device
      </Text>
      <Text style={styles.paragraph}>
        The Application does not gather precise information about the location
        of your mobile device.
      </Text>
      <Text style={styles.paragraph}>
        The Service Provider may use the information you provided to contact you
        from time to time to provide you with important information, required
        notices and marketing promotions.
      </Text>
      <Text style={styles.paragraph}>
        For a better experience, while using the Application, the Service
        Provider may require you to provide us with certain personally
        identifiable information.
      </Text>
      <Text style={styles.paragraph}>
        The information that the Service Provider request will be retained by
        them and used as described in this privacy policy.
      </Text>
      <Text style={styles.header}>Third Party Access</Text>
      <Text style={styles.paragraph}>
        Only aggregated, anonymized data is periodically transmitted to external
        services to aid the Service Provider in improving the Application and
        their service. The Service Provider may share your information with
        third parties in the ways that are described in this privacy statement.
      </Text>
      <Text style={styles.paragraph}>
        Please note that the Application utilizes third-party services that have
        their own Privacy Policy about handling data. Below are the links to the
        Privacy Policy of the third-party service providers used by the
        Application:
      </Text>
      <Text style={styles.bullet}>Expo</Text>
      <Text style={styles.paragraph}>
        The Service Provider may disclose User Provided and Automatically
        Collected Information: as required by law, such as to comply with a
        subpoena, or similar legal process; when they believe in good faith that
        disclosure is necessary to protect their rights, protect your safety or
        the safety of others, investigate fraud, or respond to a government
        request; with their trusted services providers who work on their behalf,
        do not have an independent use of the information we disclose to them,
        and have agreed to adhere to the rules set forth in this privacy
        statement.
      </Text>
      <Text style={styles.header}>Opt-Out Rights</Text>
      <Text style={styles.paragraph}>
        You can stop all collection of information by the Application easily by
        uninstalling it. You may use the standard uninstall processes as may be
        available as part of your mobile device or via the mobile application
        marketplace or network.
      </Text>
      <Text style={styles.header}>Data Retention Policy</Text>
      <Text style={styles.paragraph}>
        The Service Provider will retain User Provided data for as long as you
        use the Application and for a reasonable time thereafter. If you'd like
        them to delete User Provided Data that you have provided via the
        Application, please contact them at zak.z@outlook.com and they will
        respond in a reasonable time.
      </Text>
      <Text style={styles.header}>Children</Text>
      <Text style={styles.paragraph}>
        The Service Provider does not use the Application to knowingly solicit
        data from or market to children under the age of 13.
      </Text>
      <Text style={styles.paragraph}>
        The Application does not address anyone under the age of 13. The Service
        Provider does not knowingly collect personally identifiable information
        from children under 13 years of age. In the case the Service Provider
        discover that a child under 13 has provided personal information, the
        Service Provider will immediately delete this from their servers. If you
        are a parent or guardian and you are aware that your child has provided
        us with personal information, please contact the Service Provider
        (zak.z@outlook.com) so that they will be able to take the necessary
        actions.
      </Text>
      <Text style={styles.header}>Security</Text>
      <Text style={styles.paragraph}>
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. The Service Provider provides physical, electronic,
        and procedural safeguards to protect information the Service Provider
        processes and maintains.
      </Text>
      <Text style={styles.header}>Changes</Text>
      <Text style={styles.paragraph}>
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes to the Privacy Policy by
        updating this page with the new Privacy Policy. You are advised to
        consult this Privacy Policy regularly for any changes, as continued use
        is deemed approval of all changes.
      </Text>
      <Text style={styles.paragraph}>
        This privacy policy is effective as of 2024-07-09
      </Text>
      <Text style={styles.header}>Your Consent</Text>
      <Text style={styles.paragraph}>
        By using the Application, you are consenting to the processing of your
        information as set forth in this Privacy Policy now and as amended by
        us.
      </Text>
      <Pressable
        onPress={() =>
          Linking.openURL("https://sites.google.com/view/medznotes/privacy")
        }
      >
        <Text style={styles.link}>Lien de politique de confidentialité</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 0,
  },
  paragraph: {
    fontSize: 16,
    margin: 8,
  },
  bullet: {
    fontSize: 14,
    margin: 5,
    marginLeft: 25,
  },
  link: {
    fontSize: 12,
    margin: 8,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});
