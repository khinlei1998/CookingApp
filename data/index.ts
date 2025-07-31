export const CategoryList = [
  {
    id: 1,
    name: "မနက်စာ",
    image: require("../data/images/breakfast.png"),
  },
  {
    id: 2,
    name: "နေ့လည်စာ",
    image: require("../data/images/lunch.png"),
  },
  {
    id: 3,
    name: "ညစာ",
    image: require("../data/images/dinner.png"),
  },
  {
    id: 4,
    name: "အဆာပြေ",
    image: require("../data/images/snack.png"),
  },
  {
    id: 5,
    name: "အချိုရည်",
    image: require("../data/images/drink.png"),
  },
];

export const ProductList = [
  {
    id: 1,
    name: "ကြက်သားဟင်း",
    categoryId: 2,
    ingredient: 5,
    favourite: true,
    description:
      "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain as well as in the Caribbean.",
    image: require("../data/images/ChickenFries.jpg"),
  },
  {
    id: 2,
    name: "ထမင်းကြော်",
    categoryId: 1,
    ingredient: 5,
    favourite: true,
    description:
      "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain as well as in the Caribbean.",
    image: require("../data/images/2.jpg"),
  },
  {
    id: 3,
    name: "ထမင်းသုပ်",
    categoryId: 2,
    ingredient: 5,
    favourite: true,
    description:
      "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain as well as in the Caribbean.",
    image: require("../data/images/p3.jpg"),
  },
  {
    id: 4,
    name: "ခေါက်ဆွဲကြော်",
    categoryId: 3,
    ingredient: 5,
    favourite: true,
    description:
      "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain as well as in the Caribbean.",
    image: require("../data/images/p4.jpg"),
  },
  {
    id: 5,
    name: "Chickern Curry",
    categoryId: 5,
    ingredient: 5,
    favourite: true,
    description:
      "Chicken curry is a dish originating from the Indian subcontinent. It is common in the Indian subcontinent, Southeast Asia, Great Britain as well as in the Caribbean.",
    image: require("../data/images/ChickenFries.jpg"),
  },
];

export const product_tabs = [
  { id: 1, title: "အသေးစိတ်", content: "hg" },
  { id: 2, title: "ပါဝင်ပစ္စည်းများ", content: "kk" },
];

export const darke_mode_data = [
  { id: "dark", title: "Dark Mode" },
  { id: "light", title: "Light Mode" },
  { id: "system", title: "System" },
];
