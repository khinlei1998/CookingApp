import { View } from "react-native";
import React, { useContext } from "react";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { Icon, ArrowRightIcon } from "./ui/icon";
import { Box } from "./ui/box";
import { Pressable } from "@/components/ui/pressable";
import { ThemeContext } from "@/context/ThemeContext";
interface TitleProps {
  title: string;
  onPress?: () => void;
}

export default function Title({ title, onPress }: TitleProps) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <HStack className="mb-3 mt-2 items-center justify-between">
      <Text
        size="xl"
        bold
        className={`font-poppins leading-[50px] ${currentTheme == "dark" ? "text-white" : "text-black"}`}
      >
        {title}
      </Text>
      {onPress && (
        <Pressable onPress={onPress}>
          <HStack className="items-center">
            <Text
              size="lg"
              bold
              className="font-poppins leading-[30px] text-red-600"
            >
              {/* အားလုံးကြည့်ရန် */}
              View All
            </Text>
            <Icon as={ArrowRightIcon} size="lg" className="text-red-600" />
          </HStack>
        </Pressable>
      )}
    </HStack>
  );
}
