import { Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { Image } from "expo-image";

type CategoryProps = {
  id: number;
  name: string;
  image: string;
  select: number;
  setSelect: (id: number) => void;
};
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Category({
  id,
  name,
  image,
  setSelect,
  select,
}: CategoryProps) {
  const { width } = Dimensions.get("window");
  const cardSize = width * 0.22; // 22% of screen width
  const cardMargin = width * 0.02; // 2% of screen width for margin

  return (
    <Pressable className="mb-3" onPress={() => setSelect(id)}>
      <Card className={`rounded-xl ${select == id ? "bg-red-600" : ""}`}>
        <Text
          className={`font-poppins font-medium leading-7 ${select == id ? "text-white" : "text-black"} `}
        >
          {name}
        </Text>
      </Card>
    </Pressable>
  );
}
