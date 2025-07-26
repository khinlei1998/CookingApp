import { SafeAreaView } from "react-native";
import React from "react";
import Search from "@/components/ui/search";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Image } from "expo-image";
import { Text } from "@/components/ui/text";
import { FavouriteIcon, Icon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { router } from "expo-router";

export default function favorite() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Box className="px-5">
        <Search />
        <Pressable
          onPress={() => router.navigate("/product-detail")}
          className="relative"
          style={{ height: "50%", marginTop: 20 }}
        >
          <Box>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 15 }}
              source={require("../../data/images/ChickenFries.jpg")}
              contentFit="cover"
              transition={1000}
            />
            <Box className="absolute bottom-0 left-0 right-0 top-0 rounded-xl bg-black opacity-25" />

            <Text
              size="2xl"
              className="absolute bottom-10 left-4 font-poppins font-semibold text-white"
            >
              Fried Chicken
            </Text>
            <Pressable className="absolute right-4 top-4 rounded-md bg-white">
              <Icon
                as={FavouriteIcon}
                className={`m-2 h-5 w-5 fill-red-600 text-red-600`}
              />
            </Pressable>
          </Box>
        </Pressable>
      </Box>
    </SafeAreaView>
  );
}
