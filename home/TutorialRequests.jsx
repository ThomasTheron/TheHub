import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";

import Header from "../../components/header.js";

const TutorialRequests = () => {
  const [courses, setCourses] = useState([
    { name: "Course 1", code: "Course1" },
    { name: "Course 2", code: "Course2" },
    { name: "Course 3", code: "Course3" },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [explanation, setExplanation] = useState("");

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    // Check if the selected date is a future date
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    if (currentDate <= now) {
      return Alert.alert("Please select a date in the future");
    }

    // Check if the selected date is a weekday
    const day = currentDate.getDay();
    if (day === 0 || day === 6) {
      return Alert.alert("Please select a weekday");
    }

    setDate(currentDate);
    setShow(Platform.OS === "ios"); // For iOS we need to manually close the picker
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSubmit = async () => {
    // Check if any of the fields are empty
    if (!selectedCourse || !date || !explanation) {
      Alert.alert("Error", "Please fill out all the fields before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "http://196.47.204.235:4000/api/tutRequests",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            course: selectedCourse,
            description: explanation,
            studNum: "XXXXXX001",
            studName: "Test Tester",
            requestedDate: date.toISOString(),
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert(
          "Success",
          "Your tutorial request has been submitted successfully!"
        );
        // Reset the fields after successful submission
        setSelectedCourse(null);
        setDate(new Date());
        setExplanation("");
      } else {
        Alert.alert(
          "Error",
          "There was an error submitting your request. Please try again."
        );
      }

      console.log(JSON.stringify(responseData));
    } catch (error) {
      Alert.alert(
        "Error",
        "There was an error submitting your request. Please check your connection and try again."
      );
      console.error(error);
    }
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#fff" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <View style={styles.container}>
            {/* Header */}
            <Header title="The Hub" />

            {/* Course Selector */}
            <View style={styles.CourseSelectorContainer}>
              <Text style={styles.label}>Select a Course: </Text>
              <DropDownPicker
                open={open}
                value={selectedCourse}
                items={courses.map((course) => ({
                  label: course.name,
                  value: course.code,
                }))}
                setOpen={setOpen}
                setValue={setSelectedCourse}
                placeholder="Select a Course"
                containerStyle={{ height: 40, width: 200 }}
                itemStyle={{
                  justifyContent: "flex-start",
                }}
                onChangeItem={(item) => setSelectedCourse(item.value)}
              />
            </View>

            {/* Date Scroller */}
            <View style={styles.DateScrollerContainer}>
              <Text style={styles.label}>Select a weekday: </Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
                minimumDate={new Date()} // Set the minimum date to today's date
              />
            </View>

            {/* User Input Area */}
            <View style={styles.ExplanationContainer}>
              <Text style={styles.label}>Explanation:</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={explanation}
                onChangeText={setExplanation}
                placeholder="Explain the problem you need help with:"
                multiline
              />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  CourseSelectorContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  DateScrollerContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ExplanationContainer: {
    flex: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    flex: 1,
    height: 100,
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TutorialRequests;
