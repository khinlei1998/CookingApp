import { View, Pressable } from "react-native";
import React from "react";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Icon, ArrowRightIcon } from "@/components/ui/icon";
import { Image } from "expo-image";
import { VStack } from "./ui/vstack";
import { FavouriteIcon } from "@/components/ui/icon";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { CategoryList } from "@/data";
import { router } from "expo-router";

type ProductProps = {
  id: number;
  name: string;
  categoryId: number;
  ingredient: number;
  favourite: boolean;
  description: string;
  image: string;
};
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function Product({ id, name, categoryId, image }: ProductProps) {
  const category = CategoryList.find((category) => category.id === categoryId);

  return (
    <Pressable
      onPress={() => router.push(`/(tabs)/(home)/product-detail`)}
      className="flex-1 rounded-lg"
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        console.log("Item Height:", height);
      }}
    >
      <Card variant="filled" className="relative">
        <VStack space="md">
          <Image
            style={{
              width: "100%",
              height: 150,
              borderRadius: 20,
            }}
            source={image}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Pressable className="absolute right-4 top-4 rounded-md bg-white">
            <Icon as={FavouriteIcon} className={`m-2 h-5 w-5 text-orange`} />
          </Pressable>
          <Text size="lg" bold className="text-center">
            {name}
          </Text>
          <HStack className="items-center justify-between">
            <Text
              size="xs"
              bold
              className="rounded-full bg-orange p-2 text-white"
            >
              {category?.name}
            </Text>
            <Text size="md" className="font-base">
              5 Ingredient
            </Text>
          </HStack>
        </VStack>
      </Card>
    </Pressable>
  );
}
