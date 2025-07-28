import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="product-list" options={{ title: "Products" }} />
    </Stack>
  );
}
