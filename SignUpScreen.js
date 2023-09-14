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

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSendVerificationEmail = async () => {
    // Check if email or password fields are empty
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Empty email or password");
      return;
    }
    if (21 < email.length < 20 || email.includes('@')){
        Alert.alert("Error", "Invalid Email");
      return;
    }

    try {
      // Authenticate the user
      const response = await fetch(
        "http://196.47.202.208:4000/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      // If registration is successful, navigate to the home screen
      if (response.status == 201) {
        Alert.alert(
          "Verification Email Sent",
          "Please confirm your account using the link sent to your email."
        );
        router.replace("/");
      } else if (response.status == 400) {
        Alert.alert("Error", "User already registered");
      } else {
        Alert.alert("Error", "Server Error");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error.message || "An system error occurred during registration."
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
          <Button
            title="Send Verification Email"
            onPress={handleSendVerificationEmail}
          />
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

export default SignUpScreen;
