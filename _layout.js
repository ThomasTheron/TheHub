import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
      
    ></Stack>
  );
}
