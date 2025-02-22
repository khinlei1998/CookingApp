import { View, Text } from "react-native";
import React from "react";
import { Input, InputField, InputSlot, InputIcon } from "../input";
import { SearchIcon } from "../icon";

export default function Search() {
  return (
    <Input size="xl" className="mt-4 h-16 rounded-2xl">
      <InputSlot className="ml-4">
        <InputIcon as={SearchIcon} className="text-orange">
          {/* Some Icon Component */}
        </InputIcon>
      </InputSlot>
      <InputField
        placeholder="Search any recipes"
        className="text-base font-light"
      />
    </Input>
  );
}
