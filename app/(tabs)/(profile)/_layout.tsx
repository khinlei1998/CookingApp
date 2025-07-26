import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="language" options={{ title: "Choose Language" }} />
      <Stack.Screen name="darkmode" options={{ title: "Dark Mode" }} />
    </Stack>
  );
}
