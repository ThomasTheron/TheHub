import { Tabs } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Tabs.Screen
        name="Marks"
        options={{
          tabBarLabel: "Marks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="TutorialRequests"
        options={{
          tabBarLabel: "Tutorial Requests",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-education-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
