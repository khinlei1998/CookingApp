import { View } from "react-native";
import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Image } from "expo-image";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";
import { darke_mode_data } from "@/data";
export default function DarkModeScreen() {
  const [values, setValues] = useState("On");

  return (
    <View className="flex-1 bg-white">
      <Box className="mt-4 px-5">
        {darke_mode_data.map((item) => (
          <HStack
            className="mt-4 items-center rounded-xl border border-gray-300 p-4"
            key={item.id}
          >
            <RadioGroup value={values} onChange={setValues}>
              <Radio value={item.title}>
                <HStack className="w-full flex-row items-center justify-between">
                  <RadioLabel className="font-poppins text-base text-black">
                    {item.title}
                  </RadioLabel>
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                </HStack>
              </Radio>
            </RadioGroup>
          </HStack>
        ))}
      </Box>
    </View>
  );
}
