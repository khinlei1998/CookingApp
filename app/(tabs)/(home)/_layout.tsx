import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import ThemeProvider from "@/context/ThemeContext";
import { ThemeContext } from "@/context/ThemeContext";
export default function HomeLayout() {
  const { selectedTheme, currentTheme } = useContext(ThemeContext);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="product-list"
        options={{
          title: "Products",
          headerTintColor: currentTheme == "dark" ? "white" : "black",
          headerStyle: {
            backgroundColor: currentTheme == "dark" ? "black" : "white",
          },
        }}
      />
    </Stack>
  );
}
