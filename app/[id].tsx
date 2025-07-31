import { View, Pressable, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import { Image } from "expo-image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";

import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { product_tabs } from "@/data";
import { FavouriteIcon, Icon } from "@/components/ui/icon";
import Tab from "@/components/ui/tab";
import { useLocalSearchParams } from "expo-router";
import { productStore } from "@/store/store";
import { ThemeContext } from "@/context/ThemeContext";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function productDetail() {
  const [activeTab, setActiveTab] = useState("Details");
  const { currentTheme } = useContext(ThemeContext);

  const { id } = useLocalSearchParams();
  const getProducts = productStore((state) => state.products);
  const getProductListById = getProducts.find(
    (product) => product.id == Number(id),
  );
  const {
    name,
    image,
    ingredients = "",
    instructions = "",
  } = getProductListById || {};

  return (
    <SafeAreaView
      className={`flex-1 ${currentTheme == "dark" ? "bg-black" : "bg-white"}`}
    >
      <VStack space="lg" className="px-6">
        <Image
          style={{
            width: "100%",
            height: 300,
            borderRadius: 20,
            alignSelf: "center", // Center the image horizontally
          }}
          source={image}
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
        <Heading
          size="xl"
          className={`mt-2 font-poppinssemibold leading-[40px] ${currentTheme == "dark" ? "text-white" : "text-black"}`}
        >
          {name}
        </Heading>

        <Tab instructions={instructions} ingredients={ingredients} />
      </VStack>
    </SafeAreaView>
  );
}
