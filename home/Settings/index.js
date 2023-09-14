import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Pressable,
} from "react-native";
import Header from "../../../components/header.js";
import { Link } from "expo-router";
import { router } from "expo-router";

const Settings = () => {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            router.replace("../");
            router.replace("/");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="The Hub" />

      {/* Content */}
      <View style={styles.content}>
        <Link href={"/home/Settings/StudentHelpScreen"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Go to Student Help</Text>
          </Pressable>
        </Link>

        <Link href={"/home/Settings/TermsAndConditionsScreen"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Go to Terms And Conditions</Text>
          </Pressable>
        </Link>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 20,
  },
  button: {
    height: 170,
    width: "90%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
    overflow: "hidden",
  },
  logoutButton: {
    height: 170,
    width: "90%",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Settings;
