import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#DC2626",
        tabBarInactiveTintColor: "#bbbbbb", // Color for inactive tab labels
        tabBarShowLabel: false,
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
            backgroundColor: "#fff",
          },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "ပင်မစာမျက်နှာ",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: "အကြိုက်ဆုံးစာရင်း",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "ကိုယ်ရေးအကျဉ်း",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
