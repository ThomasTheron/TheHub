import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { router } from "expo-router";
import Header from "../components/header.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSendVerificationCode = () => {
    // Check if email field is empty
    if (!email.trim()) {
      Alert.alert("Error", "Please enter a valid UCT email address in the provided field");
      return;
    }

    // Handle sending the verification code to the user's email
    console.log("Email:", email);
  };

  const handleResetPassword = () => {
    // Check if verification code and new password fields are empty
    if (!verificationCode.trim() || !newPassword.trim()) {
      Alert.alert("Error", "Please ensure you've filled in both the verification code and the new password fields");
      return;
    }

    // Handle the password reset logic here (e.g., update the password in your backend)
    console.log("New Password:", newPassword);
    router.replace("/");
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
          <Button
            title="Send Verification Code"
            onPress={handleSendVerificationCode}
          />

          <Text style={{ paddingBottom: 5 }}>Enter the verification code sent to your email:</Text>

          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Button title="Reset Password" onPress={handleResetPassword} />
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

export default ForgotPassword;
