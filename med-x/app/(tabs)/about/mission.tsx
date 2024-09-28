import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ScrollView,
  Text,
} from "react-native";

export default function Mission() {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.logoContainer, { transform: [{ scale: scaleValue }] }]}
        >
          <Image
            source={require("../../../assets/splash.png")}
            style={styles.logo}
          />
        </Animated.View>
        <Text style={styles.title}>À propos de MedZNote</Text>
        <Text style={styles.paragraph}>
          MedZNote est une application mobile spécialement conçue pour répondre
          aux besoins des étudiants en médecine. Elle offre un aperçu
          synthétique et sans détour des maladies, mettant en lumière les perles
          cliniques, l’étiologie, les signes et symptômes clés, ainsi que des
          introductions essentielles au diagnostic, aux examens de laboratoire,
          à l’imagerie et aux options de traitement. Conçue pour être une
          ressource de référence rapide et accessible, MedXNotes aide les
          étudiants à mieux maîtriser les concepts médicaux cruciaux tout en
          facilitant la révision pendant les stages d’externat.
        </Text>
        <Text style={styles.paragraph}>{"\n"}</Text>
        <Text style={styles.paragraph}>
          Fruit du travail rigoureux d'étudiants en médecine de l'Université de
          Montréal, et entièrement révisée par des résidents expérimentés,
          MedZNote se distingue comme un outil condensé précieux, permettant aux
          étudiants d'accéder rapidement à des informations médicales
          essentielles tout en renforçant leur compréhension des sujets
          indispensables à leur pratique future.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  logoContainer: {
    width: 300,
    height: 300,
    marginTop: 50,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "justify",
  },
});
