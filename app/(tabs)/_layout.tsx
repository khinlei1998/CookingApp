import { Tabs } from "expo-router";
import React, { useContext } from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeContext } from "@/context/ThemeContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#DC2626",
        tabBarInactiveTintColor: "#C8C8C8", // Color for inactive tab labels
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle:
          // Platform.select({
          // ios: {
          //   // Use a transparent background on iOS to show the blur effect
          //   position: "absolute",
          // },
          // default: {},
          {
            backgroundColor: currentTheme == "dark" ? "black" : "white",
          },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "ပင်မစာမျက်နှာ",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "Poppins",
          },
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: "အကြိုက်ဆုံးစာရင်း",
          tabBarLabel: "Favorite",

          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="heart.fill" color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "Poppins",
          },
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: "Reels",

          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="video.fill" color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "Poppins",
          },
        }}
      />

      <Tabs.Screen
        name="(profile)"
        options={{
          title: "ကိုယ်ရေးအကျဉ်း",
          tabBarLabel: "Profile",

          tabBarIcon: ({ color }) => (
            <IconSymbol size={25} name="person.fill" color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "Poppins",
          },
        }}
      />
    </Tabs>
  );
}
