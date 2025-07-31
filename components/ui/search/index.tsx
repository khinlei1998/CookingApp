import { View, Text } from "react-native";
import React, { useState } from "react";
import { Input, InputField, InputSlot, InputIcon } from "../input";
import { SearchIcon } from "../icon";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/api";

type SearchProps = {
  setSearchValue?: (value: string) => void;
  searchValue?: string;
};
export default function Search({ setSearchValue, searchValue }: SearchProps) {
  return (
    <Input size="xl" className="mt-4 h-16 rounded-2xl">
      <InputSlot className="ml-4">
        <InputIcon as={SearchIcon} className="text-red-600">
          {/* Some Icon Component */}
        </InputIcon>
      </InputSlot>
      <InputField
        placeholder="Search any recipes"
        // placeholder="ချက်ပြုတ်နည်းများကိုရှာပါ"
        className="font-poppins text-base font-light"
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </Input>
  );
}
