import { StyleSheet, Platform, FlatList, View } from "react-native";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image } from "expo-image";
import Search from "@/components/ui/search";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryList, ProductList } from "@/data";
import { Card } from "@/components/ui/card";
import Category from "@/components/Category";
import Title from "@/components/Title";
import Product from "@/components/Product";
import { Box } from "@/components/ui/box";
import { Dimensions, ScrollView } from "react-native";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button";
import { FlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("window");
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <HStack className="mt-3 items-center justify-between">
        <VStack space="md">
          <Text size="md" className="text-gray-500">
            Hello,Yati
          </Text>
          <Text size="3xl" className="font-bold text-black">
            {`What would you like \n to cook today?`}
          </Text>
        </VStack>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={require("../../../assets/images/logo.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </HStack>
      <Search />
      <Title title="Categories" />

      <Box>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CategoryList}
          contentContainerStyle={{ columnGap: 15 }} // Adds space between cards
          renderItem={({ item }) => <Category {...item} />}
        />
      </Box>
      <Title title="Products" />
      <FlatList
        data={ProductList}
        renderItem={({ item }) => <Product {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          rowGap: 10,
          marginTop: 5,
          paddingBottom: 60,
        }}
        columnWrapperStyle={{ columnGap: 10 }}
      />
      {/* <Button className="mx-auto mt-8 h-14 w-[200px] rounded-lg bg-blue-500 text-white">
        <ButtonText size="lg" className="font-bold">
          Explore More
        </ButtonText>
      </Button> */}
      {/*  */}
    </SafeAreaView>
  );
}
