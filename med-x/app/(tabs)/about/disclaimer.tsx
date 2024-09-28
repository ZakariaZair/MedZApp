import React from "react";
import { StyleSheet, Text, ScrollView, Linking, Pressable } from "react-native";

export default function Disclaimer() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MedZNotes Disclaimer</Text>
      <Text style={styles.paragraph}>
        Cette application ("MedZNotes") a été rédigée par des étudiants en
        médecine et révisée par des résidents. Elle est destinée exclusivement
        aux étudiants en médecine et doit être utilisée à titre indicatif
        uniquement. Les informations fournies par MedZNotes ne remplacent pas
        les conseils, le diagnostic ou le traitement médical professionnel. Tout
        le contenu, y compris les textes, graphiques, images et informations
        disponibles sur ou via MedZNotes, est fourni à des fins d'information
        générale uniquement et à l'usage exclusif des étudiants en médecine pour
        soutenir leur apprentissage. Chaque médecin et étudiant en médecine est
        entièrement responsable de ses actions.
      </Text>

      <Text style={styles.subtitle}>Limitation de responsabilité :</Text>

      <Text style={styles.paragraph}>
        L'utilisation des informations fournies par MedZNotes dans un cadre
        clinique relève de la responsabilité exclusive du prescripteur, qui doit
        exercer son propre jugement professionnel et clinique avant d'agir sur
        la base des informations disponibles. Les auteurs et collaborateurs de
        MedZNotes ne sauraient être tenus responsables des blessures et/ou des
        dommages causés aux personnes ou aux biens résultant de l'utilisation de
        cette application.
      </Text>

      <Text style={styles.subtitle}>Exactitude des informations :</Text>

      <Text style={styles.paragraph}>
        Bien que nous nous efforcions de fournir des informations précises,
        MedZNotes ne garantit pas l'absence d'erreurs ou d'omissions dans le
        contenu. Nous ne garantissons pas que les informations médicales
        contenues dans MedZNotes sont complètes, exactes, à jour ou non
        trompeuses. Nous ne nous engageons pas à maintenir ces informations à
        jour en permanence. MedZNotes n'assume aucune responsabilité légale ou
        obligation pour les points mentionnés ci-dessus.
      </Text>

      <Text style={styles.subtitle}>
        Exonération de responsabilité pour dommages :
      </Text>

      <Text style={styles.paragraph}>
        En aucun cas, MedZNotes ne saurait être tenue responsable de tout
        dommage indirect, spécial, consécutif ou accessoire, y compris mais sans
        s'y limiter, la perte de profits, d'opportunités commerciales ou toute
        autre perte économique résultant de l'utilisation ou de l'incapacité à
        utiliser cette application.
      </Text>

      <Text style={styles.subtitle}>Conformité légale :</Text>

      <Text style={styles.paragraph}>
        Les utilisateurs sont responsables de s'assurer que l'utilisation de
        MedZNotes est conforme aux lois et règlements en vigueur dans leur
        juridiction. MedZNotes ne garantit pas que le contenu est approprié ou
        disponible dans toutes les juridictions.
      </Text>

      <Text style={styles.subtitle}>Jugement clinique :</Text>

      <Text style={styles.paragraph}>
        Ce guide n'est pas destiné à remplacer le jugement clinique. Il incombe
        au prescripteur agréé de vérifier les indications, contre-indications et
        posologies des médicaments (ou des actions) qu'il prescrit. MedZNotes ne
        fait aucune déclaration ou garantie quant à l'exactitude, la pertinence,
        l'exhaustivité ou l'efficacité des informations, et ne saurait être
        tenue responsable de tout résultat ou conséquence, y compris en cas de
        respect des recommandations fournies.
      </Text>

      <Text style={styles.paragraph}>
        En téléchargeant et en utilisant MedZNotes, vous reconnaissez que :
      </Text>

      <Text style={styles.list}>
        - **VOUS AVEZ LU ET COMPRIS CET AVIS DE NON-RESPONSABILITÉ**{"\n"}-
        **VOUS ACCEPTEZ CET AVIS DE NON-RESPONSABILITÉ**{"\n"}- **VOUS ACCEPTEZ
        D'ÊTRE LÉGALEMENT LIÉ PAR CET AVIS DE NON-RESPONSABILITÉ, QUI PREND
        EFFET IMMÉDIATEMENT LORS DU TÉLÉCHARGEMENT OU DE L'UTILISATION DE
        MedZNotes**
      </Text>

      <Text style={styles.paragraph}>
        **SI VOUS N'ACCEPTEZ PAS D'ÊTRE LÉGALEMENT LIÉ PAR CET AVIS DE
        NON-RESPONSABILITÉ, VOUS NE DEVEZ PAS TÉLÉCHARGER ET/OU UTILISER
        MedZNotes.**
      </Text>

      <Pressable
        onPress={() =>
          Linking.openURL("https://sites.google.com/view/medznotes/disclaimer")
        }
      >
        <Text style={styles.link}>Lien direct</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#333",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
    lineHeight: 24,
  },
  list: {
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
    lineHeight: 24,
    paddingLeft: 16,
  },
  link: {
    fontSize: 12,
    margin: 8,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});
