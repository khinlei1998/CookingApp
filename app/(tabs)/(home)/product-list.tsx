import { View, FlatList, Dimensions } from "react-native";
import React, { useContext } from "react";
import Search from "@/components/ui/search";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Icon, CloseIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import Product from "@/components/Product";
import { ProductList } from "@/data";
import { productStore } from "@/store/store";
import Title from "@/components/Title";
import { ThemeContext } from "@/context/ThemeContext";
const { width } = Dimensions.get("window");

const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

export default function ProductListScreen() {
  const products = productStore((state) => state.products);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <View
      className={`flex-1 ${currentTheme == "dark" ? "bg-black" : "bg-white"} px-5`}
    >
      <Search />
      <Text
        size="xl"
        bold
        className={`font-poppins leading-[50px] ${currentTheme == "dark" ? "text-white" : "text-black"}`}
      >
        Recent Search
      </Text>
      <View className="gap-y-4">
        <HStack className="justify-between">
          <Text className="font-poppins text-gray-500">Tomato</Text>
          <Icon as={CloseIcon} size="lg" className="text-gray-500" />
        </HStack>

        <HStack className="justify-between">
          <Text className="font-poppins text-gray-500">
            Velvet Vanilla Bliss
          </Text>
          <Icon as={CloseIcon} size="lg" className="text-gray-500" />
        </HStack>
      </View>
      {/* All Products */}
      <Text
        size="xl"
        bold
        className={`font-poppins leading-[50px] ${currentTheme == "dark" ? "text-white" : "text-black"}`}
      >
        All Products
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <Product {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: 10,
          marginTop: 5,
          paddingBottom: 60,
        }}
        columnWrapperStyle={{ columnGap: 15 }}
      />
    </View>
  );
}
