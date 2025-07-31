import { useCallback, useContext, useEffect, useState } from "react";
import { Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Image } from "expo-image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import Search from "@/components/ui/search";
import Category from "@/components/Category";
import Title from "@/components/Title";
import Product from "@/components/Product";
import { Box } from "@/components/ui/box";
import { BellIcon, Icon } from "@/components/ui/icon";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "@/api";
import { ProductProps } from "@/types";
import { productStore } from "@/store/store";
import { ThemeContext } from "@/context/ThemeContext";

const { width } = Dimensions.get("window");
const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;

export default function HomeScreen() {
  const [select, setSelect] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { currentTheme } = useContext(ThemeContext);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const fetchCategoryList = async () => {
    const response = await fetch(`${API_URL}/categories`);
    return response.json();
  };

  const fetchProductList = async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
  };

  const {
    isPending: CategoryisPending,
    isError: CategoryisError,
    data: CategoryData,
    error: CategoryError,
  } = useQuery({
    queryKey: ["categories"], //caching data by this query key
    queryFn: fetchCategoryList,
  });

  const {
    isPending: ProductisPending,
    isError: ProductisError,
    data: ProductData,
    error: ProductError,
  } = useQuery({
    queryKey: ["products"], //caching data by this query key
    queryFn: fetchProductList,
  });

  const productFilterByCategory =
    ProductData?.filter(
      (product: ProductProps) =>
        product.categoryId == select &&
        (searchValue
          ? product.name.toLowerCase().includes(searchValue.toLowerCase())
          : true),
    ) || [];

  const setProducts = productStore((state) => state.setProducts);

  useEffect(() => {
    if (ProductData) setProducts(ProductData);
  }, [ProductData, setProducts]);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20 }}
      className={currentTheme === "dark" ? "bg-black" : "bg-white"}
    >
      <HStack className="items-center justify-between">
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../../assets/images/profile/woman.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          className="rounded-full"
        />
        <Box className="rounded-2xl bg-red-600 p-3">
          <Icon as={BellIcon} size="lg" className="text-white" />
        </Box>
      </HStack>

      <HStack className="mt-5 items-center justify-between">
        <VStack>
          <Text
            size="2xl"
            className={`font-poppins font-bold leading-[40px] ${currentTheme == "dark" ? "text-white" : "text-black"}`}
          >
            {`What would you like \n to cook today?`}
          </Text>
        </VStack>
      </HStack>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} />

      <Title title="Categories" />

      <Box>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CategoryData}
          contentContainerStyle={{ columnGap: 15 }}
          renderItem={({ item }) => (
            <Category {...item} select={select} setSelect={setSelect} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Box>
      <Title
        title="Products"
        onPress={() => {
          router.navigate("/product-list");
        }}
      />
      <FlatList
        data={productFilterByCategory}
        renderItem={({ item }) => <Product {...item} select={select} />}
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
