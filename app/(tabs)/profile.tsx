import { StyleSheet, Platform, SafeAreaView } from "react-native";

import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Image } from "expo-image";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EditIcon,
  Icon,
} from "@/components/ui/icon";
import { ButtonText, Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Box className="px-5 py-3">
        {/* <Heading size="2xl"> My Profile</Heading> */}
        <HStack className="items-center justify-between">
          <Image
            className="relative"
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../../data/images/woman.png")}
            contentFit="cover"
            transition={1000}
          />
          <Button
            size="md"
            variant="outline"
            action="primary"
            className="absolute right-0"
          >
            <ButtonText>Edit Profile</ButtonText>
          </Button>
        </HStack>

        <HStack className="my-4 justify-between">
          <Text size="lg" className="font-semibold">
            Language
          </Text>
          <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
        </HStack>
        <Divider className="my-2" />

        <HStack className="my-4 justify-between">
          <Text size="lg" className="font-semibold">
            Privacy Policy
          </Text>
          <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
        </HStack>
        <Divider className="my-2" />

        <HStack className="my-4 justify-between">
          <Text size="lg" className="font-semibold">
            Dark Mode
          </Text>
          <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
        </HStack>
        <Divider className="my-2" />

        <HStack className="my-4 justify-between">
          <Text size="lg" className="font-semibold">
            About App
          </Text>
          <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
        </HStack>
        <Divider className="my-2" />

        <HStack className="my-4 justify-between">
          <Text size="lg" className="font-semibold">
            Logout
          </Text>
          <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
        </HStack>
      </Box>
    </SafeAreaView>
  );
}
