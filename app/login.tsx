import { View } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react-native";
import { Heading } from "@/components/ui/heading";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Login() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("12345");
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Center>
        <Image
          style={{
            width: 130,
            height: 130,
            borderRadius: 20,
          }}
          source={require("../assets/images/2.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </Center>
      {/* <Center> */}
      <Box className="p-5">
        <VStack space="md">
          <Text>Email Address</Text>
          <Input size="xl" variant="rounded">
            <InputField placeholder="New password" />
          </Input>
        </VStack>
        <VStack space="md">
          <Text>Email Address</Text>
          <Input size="xl" variant="rounded">
            <InputField placeholder="Confirm new password" />
          </Input>
        </VStack>

        <VStack space="lg" className="pt-4">
          <Button size="xl" className="rounded-full p-2">
            <ButtonText>Sign In</ButtonText>
          </Button>
        </VStack>
      </Box>
      {/* </Center> */}
    </SafeAreaView>
  );
}
