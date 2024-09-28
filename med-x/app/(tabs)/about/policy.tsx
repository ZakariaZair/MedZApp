import React from "react";
import { StyleSheet, Text, ScrollView, Linking, Pressable } from "react-native";

export default function Policy() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        1. Aperçu de la Politique de Confidentialité
      </Text>

      <Text style={styles.paragraph}>
        Cette politique de confidentialité s'applique à l'application MedZNotes
        (ci-après dénommée l'« Application ») pour appareils mobiles, créée par
        Zakaria Zair (ci-après dénommé le « Fournisseur de Service ») en tant
        que service gratuit. Ce service est fourni "EN L'ÉTAT".
      </Text>

      <Text style={styles.title}>
        2. Collecte et Utilisation des Informations
      </Text>

      <Text style={styles.subtitle}>2.1 Données Non Collectées</Text>

      <Text style={styles.paragraph}>
        L'application MedZNotes ne collecte aucune information personnellement
        identifiable (PII) de ses utilisateurs. Cela inclut, sans s'y limiter,
        votre nom, adresse e-mail, numéro de téléphone, adresse physique, date
        de naissance ou toute autre information pouvant vous identifier
        personnellement. L'Application n'accède pas à vos contacts, calendrier,
        photos ou autres données privées stockées sur votre appareil mobile.
        Aucune information financière ou de paiement n'est collectée, car
        l'Application est proposée en tant que service gratuit.
      </Text>

      <Text style={styles.subtitle}>
        2.2 Données Collectées Automatiquement
      </Text>

      <Text style={styles.paragraph}>
        L'Application peut collecter automatiquement certaines informations non
        personnelles lorsque vous la téléchargez et l'utilisez. Ces données
        incluent :
      </Text>

      <Text style={styles.list}>
        - L'adresse IP de votre appareil{"\n"}- Les pages ou sections de
        l'Application que vous visitez, y compris l'heure et la date de votre
        visite, et le temps passé sur ces pages{"\n"}- Des données d'utilisation
        générales, telles que le temps total passé à utiliser l'Application
        {"\n"}- Le système d'exploitation de votre appareil mobile
      </Text>

      <Text style={styles.paragraph}>
        L'Application ne collecte pas d'informations précises sur la
        localisation de votre appareil mobile.
      </Text>

      <Text style={styles.title}>3. Accès par des Tiers</Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service peut collecter et partager des données
        agrégées et anonymisées avec des services tiers afin d'améliorer
        l'Application. Aucune information personnellement identifiable n'est
        partagée avec des tiers, sauf lorsque la loi l'exige. Le Fournisseur de
        Service peut divulguer les données collectées dans les circonstances
        suivantes :
      </Text>

      <Text style={styles.list}>
        - Pour se conformer aux obligations légales, telles que répondre à une
        assignation ou un processus juridique similaire{"\n"}- Lorsque le
        Fournisseur de Service estime, de bonne foi, que la divulgation est
        nécessaire pour protéger ses droits, garantir la sécurité des
        utilisateurs ou d'autrui, enquêter sur une fraude ou répondre à une
        demande gouvernementale{"\n"}- Avec des prestataires de services tiers
        de confiance, contractuellement tenus de respecter cette politique de
        confidentialité et n'ayant pas d'utilisation indépendante des données
        divulguées
      </Text>

      <Text style={styles.title}>4. Droits d’Exclusion</Text>

      <Text style={styles.paragraph}>
        Vous pouvez arrêter toute collecte de données par l'Application en la
        désinstallant. Utilisez le processus de désinstallation standard
        disponible sur votre appareil mobile ou via la plateforme de marché
        d'applications mobiles.
      </Text>

      <Text style={styles.title}>5. Politique de Conservation des Données</Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service ne conserve pas de données personnelles, car
        aucune information personnellement identifiable n'est collectée par
        l'Application. Cependant, des données d'utilisation anonymisées peuvent
        être conservées à des fins d'analyse et d'amélioration. Si vous avez des
        préoccupations concernant la conservation des données, veuillez
        contacter le Fournisseur de Service à l'adresse zak.z@outlook.com.
      </Text>

      <Text style={styles.title}>
        6. Droits des Utilisateurs Concernant les Données
      </Text>

      <Text style={styles.paragraph}>
        Bien qu'aucune information personnellement identifiable ne soit
        collectée, les utilisateurs ont le droit de demander l'accès aux données
        anonymisées collectées, ainsi que de demander leur suppression,
        correction ou limitation du traitement. Si vous souhaitez faire une
        telle demande, veuillez nous contacter à zak.z@outlook.com.
      </Text>

      <Text style={styles.title}>7. Cookies et Autres Mécanismes de Suivi</Text>

      <Text style={styles.paragraph}>
        Cette Application n'utilise pas de cookies ni de mécanismes de suivi
        similaires pour collecter ou stocker des données utilisateur. Toutes les
        informations collectées sont directement liées à l'utilisation de
        l'Application et sont anonymisées.
      </Text>

      <Text style={styles.title}>8. Confidentialité des Enfants</Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service ne collecte pas intentionnellement
        d'informations personnelles auprès d'enfants de moins de 13 ans.
        L'Application n'est pas destinée à être utilisée par des enfants de
        moins de 13 ans. Le Fournisseur de Service encourage les parents et
        tuteurs légaux à surveiller l'utilisation des applications mobiles par
        leurs enfants et à s'assurer qu'aucune information personnelle n'est
        partagée sans consentement parental. Si vous pensez qu'un enfant de
        moins de 13 ans a fourni des informations personnellement identifiables
        au Fournisseur de Service, veuillez contacter zak.z@outlook.com, et les
        mesures nécessaires seront prises pour supprimer ces informations.
      </Text>

      <Text style={styles.title}>9. Sécurité</Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service prend des mesures raisonnables pour protéger
        la confidentialité et l'intégrité des données collectées, telles que les
        données d'utilisation anonymisées. Des mesures de protection physiques,
        électroniques et procédurales sont mises en œuvre pour protéger ces
        informations. Cependant, aucune méthode de transmission sur Internet ou
        de stockage électronique n'est totalement sécurisée, et le Fournisseur
        de Service ne peut garantir une sécurité absolue.
      </Text>

      <Text style={styles.title}>10. Modifications de cette Politique</Text>

      <Text style={styles.paragraph}>
        Cette politique de confidentialité peut être mise à jour périodiquement
        pour refléter les changements dans nos pratiques ou pour des raisons
        opérationnelles, légales ou réglementaires. Toute modification de cette
        politique sera publiée sur cette page. Il est recommandé de consulter
        régulièrement cette politique de confidentialité. L'utilisation continue
        de l'Application après les mises à jour constitue votre acceptation des
        modifications.
      </Text>

      <Text style={styles.title}>11. Date d’Entrée en Vigueur</Text>

      <Text style={styles.paragraph}>
        Cette politique de confidentialité est en vigueur à compter du 22
        septembre 2024.
      </Text>

      <Text style={styles.title}>12. Votre Consentement</Text>

      <Text style={styles.paragraph}>
        En utilisant l'Application, vous consentez à la collecte et à
        l'utilisation des informations telles que décrites dans cette politique.
        Si des modifications sont apportées à cette politique, votre utilisation
        continue de l'Application indique votre accord avec les conditions mises
        à jour.
      </Text>

      <Text style={styles.title}>13. Contactez-Nous</Text>

      <Text style={styles.paragraph}>
        Si vous avez des questions ou des préoccupations concernant cette
        politique de confidentialité ou les pratiques de l'Application, veuillez
        contacter Zakaria Zair par e-mail à zak.z@outlook.com.
      </Text>

      <Pressable
        onPress={() =>
          Linking.openURL("https://sites.google.com/view/medznotes/privacy")
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
