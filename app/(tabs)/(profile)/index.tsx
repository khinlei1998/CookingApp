import { View, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Image } from "expo-image";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ArrowRightIcon, Icon } from "@/components/ui/icon";
import { Divider } from "@/components/ui/divider";
import { Pressable } from "@/components/ui/pressable";
import { router } from "expo-router";
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Heading } from "@/components/ui/heading";
import { ThemeContext } from "@/context/ThemeContext";

export default function Profile() {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      className={`flex-1 ${currentTheme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <Box className="px-5 py-3">
        {/* <Heading size="2xl"> My Profile</Heading> */}
        <HStack className="items-center justify-between">
          <Image
            className="relative"
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../../../assets/images/profile/woman.png")}
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
        <Pressable onPress={() => router.navigate("/language")}>
          <HStack className="my-4 justify-between">
            <Text
              size="lg"
              className={`font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}
            >
              Language
            </Text>
            <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
          </HStack>
        </Pressable>
        <Divider className="my-2" />
        <Pressable onPress={() => alert("This feature is coming soon!")}>
          <HStack className="my-4 justify-between">
            <Text
              size="lg"
              className={`font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}
            >
              Privacy Policy
            </Text>
            <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
          </HStack>
        </Pressable>

        <Divider className="my-2" />
        <Pressable onPress={() => router.navigate("/darkmode")}>
          <HStack className="my-4 justify-between">
            <Text
              size="lg"
              className={`font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}
            >
              Dark Mode
            </Text>
            <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
          </HStack>
        </Pressable>
        <Divider className="my-2" />
        <Pressable onPress={() => alert("This feature is coming soon!")}>
          <HStack className="my-4 justify-between">
            <Text
              size="lg"
              className={`font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}
            >
              About App
            </Text>
            <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
          </HStack>
        </Pressable>
        <Divider className="my-2" />
        <Pressable onPress={() => setShowAlertDialog(true)}>
          <HStack className="my-4 justify-between">
            <Text
              size="lg"
              className={`font-semibold ${currentTheme === "dark" ? "text-white" : "text-black"}`}
            >
              Logout
            </Text>
            <Icon as={ArrowRightIcon} size="xl" className="text-red-600" />
          </HStack>
        </Pressable>
      </Box>

      {/* Alert Box */}
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
        size="md"
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="font-semibold text-typography-950" size="md">
              Are you logging out?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mb-4 mt-3">
            <Text size="sm">You will be returned to the login Screen.</Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => setShowAlertDialog(false)}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={() => setShowAlertDialog(false)}>
              <ButtonText>Logout</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SafeAreaView>
  );
}
