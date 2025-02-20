import React from "react";
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
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const { width, height } = Dimensions.get("window");

// const fadeAnim = useAnimatedValue(0); // Initial value for opacity: 0

export default function onboarding() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        style={{
          width: 420,
          height: 640,
          marginTop: 5,
          alignSelf: "flex-end",
        }}
        source={require("../data/images/boarding.png")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <VStack space="md" className="px-6">
        <Animated.View entering={FadeInDown.duration(300).springify()}>
          <Text size="4xl" className="font-bold text-green-800">
            Happy Cooking!
          </Text>
        </Animated.View>
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
    </SafeAreaView>
  );
}
