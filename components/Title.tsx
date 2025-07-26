import { View } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { Icon, ArrowRightIcon } from "./ui/icon";
import { Box } from "./ui/box";
import { Pressable } from "@/components/ui/pressable";
interface TitleProps {
  title: string;
  onPress: () => void;
}

export default function Title({ title, onPress }: TitleProps) {
  return (
    <HStack className="mb-5 mt-6 items-center justify-between">
      <Text size="2xl" bold className="font-poppins leading-[50px] text-black">
        {title}
      </Text>
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
    </HStack>
  );
}
