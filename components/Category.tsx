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
    <Pressable
      // style={{ margin: cardMargin }} // Set fixed margin for consistent spacing
      className="mb-3"
      onPress={() => setSelect(id)}
    >
      {/* <Card
        onLayout={(event) => {
          const { height, width } = event.nativeEvent.layout;
          console.log("cardw:", height);
          console.log("card h :", width);
        }}
        className={`rounded-xl bg-cyan-500 ${select === id ? "bg-red-600" : ""}`}
        key={id}
        style={{ justifyContent: "center", alignItems: "center" }} // Center content vertically and horizontally
      >
        <Text
          className={`items-center justify-center font-poppins leading-7 text-center${select === id ? "font-medium text-white" : "font-semibold text-red-500"}`}
        >
          {name}
        </Text>
      </Card> */}
      <Card className={`rounded-xl ${select == id ? "bg-red-600" : ""}`}>
        <Text
          size="sm"
          className={`font-poppins font-medium leading-7 ${select == id ? "text-white" : "text-black"} `}
        >
          {name}
        </Text>
      </Card>
    </Pressable>
  );
}
