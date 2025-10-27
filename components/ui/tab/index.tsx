import { ScrollView, Pressable, View } from "react-native";
import React, { useContext } from "react";
import { HStack } from "../hstack";
import { Box } from "../box";
import { Text } from "../text";
import { useState } from "react";
import { product_tabs } from "@/data";
import { ThemeContext } from "@/context/ThemeContext";
import { Clock, ChefHat } from "lucide-react-native";

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
          paddingBottom: 100,
          // flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        // className="flex-1"
      >
        <Box className="my-3">
          {activeTab === 1 ? (
            <>
              <View className="flex-row py-2">
                {/* Cooking Time Card */}
                <Box className="flex-1 flex-row items-start rounded-xl border border-gray-200 bg-white p-4">
                  <Clock color="red" size={20} />
                  <View className="mb-1">
                    <Text className="ml-2 font-poppins text-gray-500">
                      Cooking Time
                    </Text>

                    <Text className="text-orange-500 ml-2 font-poppins text-base font-semibold">
                      35 min
                    </Text>
                  </View>
                </Box>
                <Box className="ml-2 flex-1 flex-row items-start rounded-xl border border-gray-200 bg-white p-4">
                  <ChefHat color="red" size={20} />
                  <View className="mb-1">
                    <Text className="ml-2 font-poppins text-gray-500">
                      Cuisine
                    </Text>

                    <Text className="text-orange-500 ml-2 font-poppins text-base font-semibold">
                      Italian
                    </Text>
                  </View>
                </Box>
              </View>
              <Text
                className={`font-poppins leading-8 ${currentTheme == "dark" ? "text-white" : "text-black"}`}
              >
                {instructions}
              </Text>
            </>
          ) : (
            <Text
              className={`font-poppins leading-8 ${currentTheme == "dark" ? "text-white" : "text-black"}`}
            >
              {ingredients}
            </Text>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
}
