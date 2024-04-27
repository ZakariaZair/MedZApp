import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Logo from "../../../assets/images/white_logo_nobg.png";

export default function Admin() {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    password === "1234" ? router.push("/admin/configuration") : null;
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.adminContainer}>
        <Text style={styles.admin}>Admin</Text>
        <Text style={styles.description}>
          Pour apporter des modifications à l'application
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.password}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleSubmit}
          />
          <Pressable style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.submitText}>OK</Text>
          </Pressable>
        </View>
        <Link href="/" style={styles.back}>
          Go back
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000066",
    paddingHorizontal: 20,
  },
  adminContainer: {
    width: "50%",
    alignItems: "center",
  },
  admin: {
    fontWeight: "bold",
    fontSize: 120,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontStyle: "italic",
    color: "white",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  password: {
    width: "20%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    padding: 10,
    color: "white",
    marginRight: 10,
    flex: 1,
  },
  submit: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  submitText: {
    color: "black",
  },
  logo: {
    width: 600,
    height: 600,
    marginRight: 40,
  },
  back: {
    color: "grey",
    marginTop: 10,
  },
});
