import { Dimensions, ScrollView, FlatList } from "react-native";
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

const { width } = Dimensions.get("window");
const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

export default function HomeScreen() {
  const [select, setSelect] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <HStack className="mt-3 items-center justify-between">
        <VStack space="md">
          <Text size="3xl" className="font-bold text-black">
            {`What would you like \n to cook today?`}
          </Text>
        </VStack>
      </HStack>
      <Search />
      <Title title="Categories" />

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
