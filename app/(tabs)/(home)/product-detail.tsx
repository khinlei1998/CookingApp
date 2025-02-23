import { View, Pressable } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";

import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import Tab from "@/components/ui/tab";
import { product_tabs } from "@/data";
import { FavouriteIcon, Icon } from "@/components/ui/icon";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function productDetail() {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <VStack space="lg" className="flex-1 bg-white px-6">
      <Image
        style={{
          width: "100%",
          height: 300,
          borderRadius: 20,
          alignSelf: "center", // Center the image horizontally
        }}
        source={require("../../../data/images/ChickenFries.jpg")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      <Pressable className="absolute right-8 top-6 rounded-md bg-white">
        <Icon
          as={FavouriteIcon}
          className={`m-2 h-5 w-5 fill-red-600 text-red-600`}
        />
      </Pressable>
      <Heading size="xl" className="font-poppinssemibold mt-2 leading-[40px]">
        ကြက်သားဟင်း
      </Heading>

      <Tab product_tabs={product_tabs} />
    </VStack>
  );
}
