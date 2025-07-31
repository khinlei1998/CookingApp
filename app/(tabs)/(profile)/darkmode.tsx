import { View, useColorScheme } from "react-native";
import React, { useContext, useState } from "react";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";
import { darke_mode_data } from "@/data";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkModeScreen() {
  const [values, setValues] = useState("On");
  const { selectedTheme, currentTheme } = useContext(ThemeContext);
  const colorScheme = useColorScheme();

  return (
    <View
      className={`flex-1 ${currentTheme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <Box className="mt-4 px-5">
        {darke_mode_data.map((item) => (
          <HStack
            className="mt-4 items-center rounded-xl border border-gray-300 p-4"
            key={item.id}
          >
            <RadioGroup value={values} onChange={() => selectedTheme(item.id)}>
              <Radio value={item.title}>
                <HStack className="w-full flex-row items-center justify-between">
                  <RadioLabel
                    className={`font-poppins text-base ${currentTheme === "dark" ? "text-white" : "text-black"}`}
                  >
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
