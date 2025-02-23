import {
  Dimensions,
  ScrollView,
  FlatList,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Search from "@/components/ui/search";
import { CategoryList, ProductList } from "@/data";
import Category from "@/components/Category";
import Title from "@/components/Title";
import Product from "@/components/Product";
import { Box } from "@/components/ui/box";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { FlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("window");
const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

export default function HomeScreen() {
  const [select, setSelect] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <HStack className="mt-5 items-center justify-between">
        <VStack>
          <Text
            size="2xl"
            className="font-poppins font-bold leading-[40px] text-black"
          >
            {/* {`What would you like \n to cook today?`} */}
            ဒီနေ့ ဘာဟင်းချက်ချင်လဲ?
          </Text>
        </VStack>
      </HStack>
      <Search />
      <Title title="အမျိုးအစားများ" />

      <Box>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CategoryList}
          contentContainerStyle={{ columnGap: 15 }} // Adds space between cards
          renderItem={({ item }) => (
            <Category {...item} select={select} setSelect={setSelect} />
          )}
        />
      </Box>
      <Title title="ပစ္စည်းများ" />
      <FlatList
        data={ProductList}
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
    </SafeAreaView>
  );
}
