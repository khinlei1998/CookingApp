import { ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import { HStack } from "../hstack";
import { Box } from "../box";
import { Text } from "../text";
import { useState } from "react";
import { product_tabs } from "@/data";
import { ThemeContext } from "@/context/ThemeContext";
type TabProps = {
  instructions: string;
  ingredients: string;
};
export default function Tab({ instructions, ingredients }: TabProps) {
  const [activeTab, setActiveTab] = useState(product_tabs[0].id);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Box>
      <HStack className="" space="xl">
        {product_tabs.map((tab) => (
          <Pressable key={tab.title} onPress={() => setActiveTab(tab.id)}>
            <Box className="flex items-center">
              <Text
                size="xl"
                bold
                className={`text-center font-poppinssemibold leading-10 ${
                  activeTab === tab.id ? "" : "opacity-60"
                } ${currentTheme == "dark" ? "text-white" : "text-black"}`}
              >
                {tab.title}
              </Text>
              {activeTab === tab.id && (
                <Box className="h-1 w-full rounded-full bg-red-600" />
              )}
            </Box>
          </Pressable>
        ))}
      </HStack>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 60,
          // flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        // className="flex-1"
      >
        <Box className="my-3">
          {activeTab === 1 ? (
            <Text
              className={`leading-8 ${currentTheme == "dark" ? "text-white" : "text-black"}`}
            >
              {instructions}
            </Text>
          ) : (
            <Text
              className={`leading-8 ${currentTheme == "dark" ? "text-white" : "text-black"}`}
            >
              {ingredients}
            </Text>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
}
