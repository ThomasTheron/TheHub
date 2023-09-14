import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import Header from "../components/header.js";

const Root = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="The Hub" />

      <Link href={"/SignInScreen"} asChild>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign-In</Text>
        </Pressable>
      </Link>
        
      <Link href={"/SignUpScreen"} asChild>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign-Up</Text>
        </Pressable>
      </Link>

      <Link href={"/ForgotPassword"} asChild>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Change Password</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    padding: 10,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 10,
    overflow: "hidden",
  },
  Button: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Root;
