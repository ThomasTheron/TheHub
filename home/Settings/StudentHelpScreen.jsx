import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../../../components/header.js";

const StudentHelpScreen = () => {
  return (
        
    <SafeAreaView style={styles.container}>

      <Header title="The Hub"/>

      <Text style={styles.title}>Student Help</Text>
      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.subheading}>Wellness Support</Text>
        <Text style={styles.paragraph}>
          UCT Student Wellness Centre offers a comprehensive outpatient health
          service by both medical practitioners and nurses, who are dedicated to
          helping students to remain healthy, and to make the correct life
          choices while pursuing their academic goals. Students are encouraged
          to seek assistance and guidance as early as possible.
        </Text>
        <Text style={styles.contactDetails}>
          Medical Services Tel: +27 (0)21 650 1020
        </Text>
        <Text style={styles.contactDetails}>
          Counselling Services Tel: +27 (0)21 650 1017
        </Text>
        <Text style={styles.contactDetails}>
          UCT Student Careline: 0800 24 25 26 free from a Telkom line
        </Text>
        <Text style={styles.contactDetails}>SMS 31393 for a call-me-back.</Text>

        <Text style={styles.subheading}>Counselling Support</Text>
        <Text style={styles.paragraph}>
          Student Wellness Service Available at the Health Science Campus. The
          physical, emotional and mental health of our students is of great
          importance to us. We have been expanding our support services team and
          have more staff available to assist you in providing wellness support.
          The first stop for any challenges or issues undergraduate students may
          be facing is Nonkosi Malala.
        </Text>
        <Text style={styles.contactDetails}>
          She can be reached on 021 406 6749 or Nonkosi.Malala@uct.ac.za.
        </Text>
        <Text style={styles.subheading}>Academic Support</Text>
        <Text style={styles.paragraph}>
          Tutors are available to offer a wide range of support in Anatomy and
          Physiology first, second and third year subjects.
        </Text>
        <Text style={styles.contactDetails}>
          For more information regarding these tutorials email:
          theHUBUCT@gmail.com
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
  subheading: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  paragraph: {
    marginBottom: 10,
    marginTop: 5,
  },
  contactDetails: {
    fontStyle: "italic",
    marginBottom: 10,
  },
});

export default StudentHelpScreen;
