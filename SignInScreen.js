import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { router } from "expo-router";
import Header from "../components/header.js";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // Check if email or password fields are empty
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Empty email or password");
      return;
    }
    if (21 < email.length < 20 || email.includes('@myuct.ac.za')){
        Alert.alert("Error", "Invalid Email");
      return;
    }

    try {
      // Authenticate the user
      const response = await fetch("http://196.47.202.208:4000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // If authentication is successful, navigate to the home screen
      if (response.status == 200) {
        router.replace("/home/Marks");
      } else {
        Alert.alert(
          "Authentication Error", "Unable to sign in with the provided details. Please try again."
        );
      }
    } catch (error) {
      // Handle any errors during authentication
      Alert.alert(
        "Error",
        error.message || "An system error occurred during sign in."
      );
    }
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <View style={styles.container}>
          {/* Header */}
          <Header title="The Hub" />

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Sign In" onPress={handleSignIn} />
          <Button title="Go Back" onPress={handleBack} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 6,
    borderRadius: 5,
  },
});

export default SignInScreen;
