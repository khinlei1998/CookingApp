import { View } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { Text } from "./ui/text";
import { Icon, ArrowRightIcon } from "./ui/icon";
import { Box } from "./ui/box";
interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <HStack className="mb-5 mt-6 items-center justify-between">
      <Text size="2xl" bold className="text-black">
        {title}
      </Text>
      <HStack className="items-center">
        <Text size="lg" bold className="text-orange">
          View All{" "}
        </Text>
        <Icon as={ArrowRightIcon} size="lg" className="text-orange" />
      </HStack>
    </HStack>
  );
}
