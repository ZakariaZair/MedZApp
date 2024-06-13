import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ScrollView,
  Text,
} from "react-native";

export default function More() {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [scaleValue]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.logoContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            <Image
              source={require("../../../assets/splash.png")}
              style={styles.logo}
            />
          </Animated.View>
          <Text style={styles.paragraph}>
            MedZNotes est une application dédiée aux professionnels de la santé
            et aux étudiants en médecine. Conçue pour offrir une expérience
            utilisateur fluide et intuitive, MedZNotes permet un accès rapide et
            organisé aux informations médicales essentielles.
          </Text>
          <Text style={styles.title}>Fonctionnalités principales</Text>
          <Text style={styles.paragraph}>
            Accès Rapide : Navigation intuitive à travers différentes
            spécialités médicales, offrant des informations détaillées et
            pertinentes pour chaque domaine.
          </Text>
          <Text style={styles.paragraph}>
            Mises à Jour Régulières : Contenu constamment mis à jour pour
            refléter les dernières avancées et recommandations en matière de
            soins de santé.
          </Text>
          <Text style={styles.paragraph}>
            Personnalisation : Possibilité de marquer vos sections favorites et
            d'ajouter des notes personnalisées pour un accès facilité lors de
            vos consultations et études.
          </Text>
          <Text style={styles.paragraph}>
            Ressources Visuelles : Intégration d'images et d'illustrations
            médicales pour une meilleure compréhension des sujets complexes.
          </Text>
          <Text style={styles.title}>Mission</Text>
          <Text style={styles.paragraph}>
            Notre mission est de fournir aux professionnels de la santé et aux
            étudiants de médecine un outil fiable et accessible pour améliorer
            leurs connaissances et leurs pratiques cliniques. Nous croyons que
            l'accès à une information de qualité est crucial pour des soins de
            santé efficaces et sécurisés. Commentaires et Support Nous sommes
            toujours à l'écoute de vos retours pour améliorer l'application.
            N'hésitez pas à nous contacter pour toute question, suggestion ou
            problème rencontré. Notre équipe de support est là pour vous aider à
            tirer le meilleur parti de MedZNotes.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
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
    margin: 15,
  },
});
