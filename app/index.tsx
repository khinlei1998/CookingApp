import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  useAnimatedValue,
} from "react-native";
import { Image } from "expo-image";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
// import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";
import { FadeIn, FadeOut } from "react-native-reanimated";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  BounceInUp,
  BounceInDown,
} from "react-native-reanimated";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const { width, height } = Dimensions.get("window");

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
    <SafeAreaView className="flex-1 bg-white">
      <Animated.Image
        style={[
          {
            width: 420,
            height: 640,
            marginTop: 5,
            alignSelf: "flex-end",
          },
          animatedImageStyle,
        ]}
        source={require("../data/images/boarding.png")}
        resizeMode="cover" // Use resizeMode instead of contentFit
      />
      <Animated.View style={animatedStyles}>
        <VStack space="md" className="px-6">
          <Text size="4xl" className="font-bold text-green-800">
            Happy Cooking!
          </Text>
          <Text size="2xl" className="text-green-800">
            This recipe app provides easy recipes for all skill levels!
          </Text>
        </VStack>
        <Button
          size="lg"
          className="font-mono mx-6 mt-8 h-14 w-[200px] rounded-lg bg-orange font-bold"
          onPress={() => router.navigate("/(tabs)/(home)")}
        >
          <ButtonText className="font-mono font-bold text-white">
            Get Started
          </ButtonText>
        </Button>
      </Animated.View>
    </SafeAreaView>
  );
}
