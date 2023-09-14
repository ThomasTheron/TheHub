import React from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "../../../components/header.js";

const TermsAndConditionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="The Hub" />
      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.paragraph}>
          By downloading or using the HUB app, these terms and conditions will
          apply to you:
        </Text>
        <Text style={styles.paragraph}>
          You may use this app without cost, but you may not send it on to
          anyone who is not a student at the University of Cape Town. You may
          not copy or modify the app or any part of the app.
        </Text>
        <Text style={styles.paragraph}>
          You may not attempt to extract the source code of the app.
        </Text>
        <Text style={styles.paragraph}>
          You must be a registered UCT student. You must not share your password
          with anyone.
        </Text>
        <Text style={styles.paragraph}>
          All intellectual property rights related to this app still belong to
          the University of Cape Town.
        </Text>
        <Text style={styles.paragraph}>
          We reserve the right to make changes to the app, withdraw the app at
          any time and for any reason.
        </Text>
        <Text style={styles.paragraph}>
          Should you use the app without being connected to a Wi-Fi source, you
          should consider the terms of agreement with your mobile network
          provider. They may still apply and as a result, you may be charged by
          your mobile provider for the cost of data used by the app.
        </Text>
        <Text style={styles.paragraph}>
          In using the app, you are accepting responsibility for any such
          charges, including roaming data charges. If you are not the bill-payer
          for the device on which you are using the app, please be aware that we
          assume that you have received permission from the bill-payer for using
          the app.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  ScrollContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 20,
  },
  paragraph: {
    marginBottom: 15,
  },
});

export default TermsAndConditionsScreen;
