import { View, Pressable } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";

import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import Tab from "@/components/ui/tab";
import { product_tabs } from "@/data";
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function productDetail() {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <VStack space="lg" className="flex-1 bg-white">
      <Image
        style={{
          width: "100%",
          height: 300,
        }}
        source={require("../../../data/images/ChickenFries.jpg")}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Heading size="2xl" className="ml-4 mt-3">
        Fried Chicken
      </Heading>

      {/* <HStack className="m-4 rounded-2xl bg-slate-200 px-3 py-3">
        <Pressable
          onPress={() => setActiveTab("Details")}
          className={`flex-1 ${activeTab === "Details" ? "bg-orange" : ""} items-center justify-center rounded-full p-3`}
        >
          <Text
            size="xl"
            bold
            className={`text-center ${activeTab === "Details" ? "text-white" : "text-black"}`}
          >
            Details
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("Ingredients")}
          className={`flex-1 ${activeTab === "Ingredients" ? "bg-orange" : ""} items-center justify-center rounded-full p-3`}
        >
          <Text
            size="xl"
            bold
            className={`${activeTab === "Ingredients" ? "text-white" : "text-black"}`}
          >
            Ingredients
          </Text>
        </Pressable>
      </HStack>

      <View>
        {activeTab === "Ingredients" ? (
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Ingredients List
          </Text>
        ) : (
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Instructions Details
          </Text>
        )}
      </View> */}
      <Tab product_tabs={product_tabs} />
    </VStack>
  );
}
