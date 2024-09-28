import React from "react";
import { StyleSheet, Text, ScrollView, Linking, Pressable } from "react-native";

export default function Terms() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>1. Introduction</Text>

      <Text style={styles.paragraph}>
        Ces termes et conditions s'appliquent à l'application MedZNotes
        (ci-après dénommée "l'Application"), destinée aux appareils mobiles,
        créée par Zakaria Zair (ci-après dénommé "le Fournisseur de Service") en
        tant que service gratuit.
      </Text>

      <Text style={styles.paragraph}>
        En téléchargeant ou en utilisant l'Application, vous acceptez
        automatiquement ces termes et conditions. Il est fortement recommandé de
        lire attentivement et de bien comprendre ces termes avant d'utiliser
        l'Application.
      </Text>

      <Text style={styles.title}>2. Propriété Intellectuelle</Text>

      <Text style={styles.paragraph}>
        Le contenu de l'Application, y compris les marques déposées, les droits
        d'auteur, les droits sur les bases de données et autres droits de
        propriété intellectuelle, reste la propriété du Fournisseur de Service.
        Toute copie non autorisée, modification de l'Application ou utilisation
        de nos marques est strictement interdite. Il est également interdit de
        tenter d'extraire le code source, de traduire l'Application dans
        d'autres langues ou de créer des versions dérivées.
      </Text>

      <Text style={styles.title}>3. Modifications et Frais</Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service se réserve le droit de modifier l'Application
        ou de facturer des services supplémentaires à tout moment et pour
        n'importe quelle raison. Si des frais sont appliqués pour l'utilisation
        de l'Application ou de ses services, ils vous seront clairement
        communiqués.
      </Text>

      <Text style={styles.title}>4. Collecte et Traitement des Données</Text>

      <Text style={styles.paragraph}>
        L'Application ne collecte aucune information personnellement
        identifiable (PII), telle que les noms, adresses e-mail ou autres
        données pouvant être utilisées pour identifier les utilisateurs.
        Cependant, l'Application peut stocker et traiter des données
        d'utilisation anonymisées pour améliorer l'expérience utilisateur et
        fournir les services proposés. Il est de votre responsabilité de
        maintenir la sécurité de votre appareil et de gérer l'accès à
        l'Application.
      </Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service déconseille fortement de jailbreaker ou de
        rooter votre appareil, car cela pourrait compromettre les
        fonctionnalités de sécurité de votre téléphone, l'exposer à des
        logiciels malveillants et empêcher l'Application de fonctionner
        correctement.
      </Text>

      <Text style={styles.title}>5. Connexion Internet et Limitations</Text>

      <Text style={styles.paragraph}>
        Certaines fonctionnalités de l'Application nécessitent une connexion
        Internet active, que ce soit via Wi-Fi ou votre réseau mobile. Le
        Fournisseur de Service ne peut être tenu responsable si l'Application ne
        fonctionne pas de manière optimale en raison d'un manque d'accès au
        Wi-Fi ou de limitations de données mobiles.
      </Text>

      <Text style={styles.title}>6. Utilisation Hors Réseau Wi-Fi</Text>

      <Text style={styles.paragraph}>
        Si vous utilisez l'Application en dehors d'une connexion Wi-Fi, les
        termes de votre contrat avec votre fournisseur de réseau mobile
        s'appliquent. Vous pouvez encourir des frais de votre opérateur pour
        l'utilisation de données ou d'autres frais de tiers. En utilisant
        l'Application, vous acceptez la responsabilité de ces frais, y compris
        les frais d'itinérance si vous utilisez l'Application en dehors de votre
        région ou pays d'origine. Si vous n'êtes pas le titulaire du compte pour
        l'appareil que vous utilisez, vous confirmez que vous avez obtenu
        l'autorisation du payeur.
      </Text>

      <Text style={styles.title}>7. Responsabilité de l'Utilisateur</Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service ne peut être tenu responsable de l'utilisation
        que vous faites de l'Application. Il est de votre responsabilité de vous
        assurer que votre appareil est chargé. Si votre appareil se décharge et
        que vous ne pouvez pas accéder au service, le Fournisseur de Service ne
        pourra être tenu responsable.
      </Text>

      <Text style={styles.title}>
        8. Fiabilité des Informations et Limitation de Responsabilité
      </Text>

      <Text style={styles.paragraph}>
        Bien que le Fournisseur de Service s'efforce de maintenir l'Application
        à jour et précise, certaines informations proviennent de sources
        tierces. Le Fournisseur de Service n'accepte aucune responsabilité pour
        toute perte directe ou indirecte résultant de votre confiance entière
        dans la fonctionnalité ou les informations fournies par l'Application.
      </Text>

      <Text style={styles.title}>9. Sources d'Information et Citations</Text>

      <Text style={styles.paragraph}>
        Toutes les informations fournies dans l'Application proviennent de
        sources médicales fiables, d'ouvrages de référence et de sites réputés.
        Le contenu est cité conformément aux normes académiques, garantissant
        que les étudiants et professionnels peuvent s'appuyer en toute confiance
        sur l'exactitude des informations présentées. Des directives de citation
        et de référence appropriées sont strictement suivies au sein de
        l'Application afin de maintenir l'intégrité académique.
      </Text>

      <Text style={styles.title}>
        10. Mises à Jour et Résiliation du Service
      </Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service peut mettre à jour l'Application de temps à
        autre. Lorsque les exigences du système d'exploitation changent, vous
        devrez peut-être télécharger des mises à jour pour continuer à utiliser
        l'Application. Le Fournisseur de Service ne garantit pas que
        l'Application sera toujours compatible avec le système d'exploitation de
        votre appareil.
      </Text>

      <Text style={styles.paragraph}>
        Vous acceptez d'installer les mises à jour lorsque celles-ci vous sont
        proposées. Le Fournisseur de Service se réserve également le droit de
        cesser de fournir l'Application à tout moment, sans préavis. En cas de
        résiliation, (a) tous les droits et licences qui vous sont accordés
        prendront fin ; (b) vous devez cesser d'utiliser l'Application et la
        supprimer de votre appareil.
      </Text>

      <Text style={styles.title}>
        11. Modifications de Ces Termes et Conditions
      </Text>

      <Text style={styles.paragraph}>
        Le Fournisseur de Service peut mettre à jour ces termes et conditions
        périodiquement. Vous êtes invité à consulter cette page régulièrement
        pour prendre connaissance des modifications. Le Fournisseur de Service
        vous informera de tout changement en publiant les nouveaux termes et
        conditions sur cette page.
      </Text>

      <Text style={styles.paragraph}>
        Ces termes et conditions sont en vigueur à partir du 22 septembre 2024.
      </Text>

      <Text style={styles.title}>12. Contactez-Nous</Text>

      <Text style={styles.paragraph}>
        Si vous avez des questions ou des suggestions concernant ces termes et
        conditions, veuillez contacter le Fournisseur de Service à l'adresse
        suivante : zak.z@outlook.com.
      </Text>

      <Pressable
        onPress={() =>
          Linking.openURL("https://sites.google.com/view/medznotes/terms")
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
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
    lineHeight: 24,
  },
  link: {
    fontSize: 12,
    margin: 8,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
});
