import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Dimensions } from "react-native";
import Header from "../../components/header.js";
import { BarChart, PieChart } from "react-native-gifted-charts";

const Marks = () => {
  const [courses, setCourses] = useState([
    { name: "Course 1", code: "Course1" },
    { name: "Course 2", code: "Course2" },
  ]);

  const [selectedItem, setSelectedItem] = useState(courses[0].code);

  const handleSelection = (courseCode) => {
    setSelectedItem(courseCode);
  };

  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth / courses.length - 25;

  const barData = [
    {
      value: 40,
      label: "Aquired",
      frontColor: "#baffc9",
      topLabelComponent: () => (
        <Text style={{ color: "#8affa1", fontSize: 18, marginBottom: 6 }}>
          40%
        </Text>
      ),
    },
    {
      value: 34,
      label: "Available",
      frontColor: "#bae1ff",
      topLabelComponent: () => (
        <Text style={{ color: "#89c2ff", fontSize: 18, marginBottom: 6 }}>
          34%
        </Text>
      ),
    },
    {
      value: 26,
      label: "Lost",
      frontColor: "#ffb3ba",
      topLabelComponent: () => (
        <Text style={{ color: "#ff8a8a", fontSize: 18, marginBottom: 6 }}>
          26%
        </Text>
      ),
    },
  ];

  const pieData = [
    { value: 40, color: "#baffc9", text: "40%" },
    { value: 34, color: "#bae1ff", text: "30%" },
    { value: 26, color: "#ffb3ba", text: "26%" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="The Hub" />

      {/* Horizontal Course Selection Pane */}
      <ScrollView
        horizontal
        style={styles.selectionContainer}
        showsHorizontalScrollIndicator={false}
      >
        {courses.map((course) => (
          <TouchableOpacity
            key={course.code}
            style={[
              styles.selectionItem,
              { width: buttonWidth },
              selectedItem === course.code && styles.selectedItem,
            ]}
            onPress={() => handleSelection(course.code)}
          >
            <Text style={styles.selectionText}>{course.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Visulisations */}
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.textContainer}>
            <Text style={styles.textAcquired}>Marks Acquired: 40%</Text>
            <Text style={styles.textAvailable}>Marks Available: 34%</Text>
            <Text style={styles.textLost}>Marks Lost: 26%</Text>
          </View>

          <View style={{ height: 300 }}>
            <BarChart
              width={screenWidth}
              spacing={35}
              barWidth={75}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PieChart
              showText
              textColor="black"
              radius={150}
              textSize={15}
              textBackgroundRadius={26}
              data={pieData}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  selectionContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  selectionItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  selectionText: {
    fontSize: 18,
    textAlign: "center",
  },
  selectedItem: {
    backgroundColor: "#B5B5B5",
  },
  content: {
    flex: 10,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textAvailable: {
    color: "#89c2ff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textAcquired: {
    color: "#8affa1",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  textLost: {
    color: "#ff8a8a",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
});

export default Marks;
