import React, { useEffect } from "react";
import { SafeAreaView, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function onboarding() {
  const opacity = useSharedValue(0); // Initial opacity is 0
  const offset = useSharedValue(-width); // Initial position off-screen to the left

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: opacity.value, // Bind opacity to shared value
  }));

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 2000 }); // Animate to full opacity in 2 seconds
    offset.value = withTiming(0, { duration: 2000 }); // Animate to the center in 2 seconds
  }, []);
  return (
    <Box className="flex-1 items-center justify-center bg-black">
      {/* Background Image */}
      <Image
        className="relative"
        style={{ width: "100%", height: "90%" }}
        source={require("../data/images/image1.png")}
        contentFit="cover"
        transition={1000}
      />
      <Box className="absolute h-full w-full bg-black/25"></Box>

      {/* Overlay & Content */}
      <Animated.View style={animatedStyles} className="absolute bottom-32">
        <VStack space="4xl" className="items-center">
          <Text className="font-poppinssemibold text-center text-7xl text-white">
            {`Let’s${"\n"}Cooking`}
          </Text>
          <Text size="2xl" className="text-center font-poppins text-white">
            Find best recipes for cooking
          </Text>

          <Button
            size="lg"
            className="mx-6 mt-6 h-16 w-[250px] rounded-xl bg-red-600"
            onPress={() => router.push("/(tabs)/(home)")}
          >
            <ButtonText className="font-poppins text-xl font-bold text-white">
              Get Started →
            </ButtonText>
          </Button>
        </VStack>
      </Animated.View>
    </Box>
  );
}
