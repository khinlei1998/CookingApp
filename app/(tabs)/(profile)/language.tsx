import { View } from "react-native";
import React, { useContext } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Image } from "expo-image";
import { HStack } from "@/components/ui/hstack";
import { ThemeContext } from "@/context/ThemeContext";

export default function Language() {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View
      className={`flex-1 ${currentTheme == "dark" ? "bg-black" : "bg-white"}`}
    >
      <Box className="mt-4 px-5">
        <Text
          className={`font-poppins text-lg ${currentTheme == "dark" ? "text-white" : "text-black"}`}
        >
          Primary Language
        </Text>
        <HStack className="mt-2 items-center gap-x-3 rounded-xl border border-red-400 p-4">
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require("../../../assets/images/profile/us_flag.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text
            className={`font-poppins ${currentTheme == "dark" ? "text-white" : "text-black"}`}
          >
            English (US)
          </Text>
        </HStack>
      </Box>

      <Box className="mt-6 px-5">
        <Text
          className={`font-poppins text-lg ${currentTheme == "dark" ? "text-white" : "text-black"}`}
        >
          Other Languages
        </Text>
        <HStack className="mt-2 items-center gap-x-3 rounded-xl border border-gray-300 p-4">
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require("../../../assets/images/profile/mya_flag.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text
            className={`font-poppins ${currentTheme == "dark" ? "text-white" : "text-black"}`}
          >
            Myanmar
          </Text>
        </HStack>
      </Box>
    </View>
  );
}
