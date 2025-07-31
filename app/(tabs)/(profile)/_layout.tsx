import { View, Text, useColorScheme } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import ThemeProvider from "@/context/ThemeContext";
// import { ThemeContext } from "@react-navigation/native";
import { ThemeContext } from "@/context/ThemeContext";
export default function ProfileLayout() {
  const { selectedTheme, currentTheme } = useContext(ThemeContext);

  // const { DarkTheme } = useContext(ThemeContext);
  // const scheme = useColorScheme(); // returns 'dark' or 'light'
  // console.log("scheme", scheme);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Setting", headerShown: false }}
      />
      <Stack.Screen
        name="language"
        options={{
          headerTintColor: currentTheme == "dark" ? "white" : "black", // Sets header title and back button color to white

          title: "Choose Language",
          headerStyle: {
            backgroundColor: currentTheme == "dark" ? "black" : "white",
          },
        }}
      />
      <Stack.Screen
        name="darkmode"
        options={{
          title: "Dark Mode",
          headerStyle: {
            backgroundColor: currentTheme == "dark" ? "black" : "white",
          },
          headerTintColor: currentTheme == "dark" ? "white" : "black", // Sets header title and back button color to white
        }}
      />
    </Stack>
  );
}
