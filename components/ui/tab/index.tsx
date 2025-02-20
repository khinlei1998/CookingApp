import { ScrollView, Pressable } from "react-native";
import React from "react";
import { HStack } from "../hstack";
import { Box } from "../box";
import { Text } from "../text";
import { useState } from "react";

type TabProps = {
  product_tabs: { title: string; content: string }[];
};
export default function Tab({ product_tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(product_tabs[0].title);

  return (
    <Box className="flex-1">
      <HStack className="mx-4 rounded-2xl bg-slate-200 px-3 py-3">
        {product_tabs.map((tab) => (
          <Pressable
            key={tab.title}
            onPress={() => setActiveTab(tab.title)}
            className={`flex-1 ${activeTab === tab.title ? "bg-orange" : ""} items-center justify-center rounded-full p-3`}
          >
            <Text
              size="xl"
              bold
              className={`text-center ${activeTab === tab.title ? "text-white" : "text-black"}`}
            >
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </HStack>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === "Details" ? (
          <Box className="mx-3 p-3">
            <Text size="lg">
              ကြက်သားကိုသန်စင့်ပြီး အချောင်းလေးဖြစ်အောင် လှီးထားပါ။ လှီးထားတဲ့
              ကြက်သားထဲကို ဆားနှင့် ငရုပ်ကောင်းမှုန့် သကြား ခရုဆီ နယ်ပြီး
              ရေခဲသေတ္တာထဲ ၁နာရီ နှပ်ထားပါ။ ကြော်ခါနီး ပြောင်းကော်မှုန့်
              တန်ပူရာမှုန့် ကြက်ဥခေါက်ထည့် ပဲငံပြာရည် ထည့်ပြီ နယ်ထား ပေါင်း
              မုန့်ခြောက်မှုန့်ကို ပန်းကန်တခုစီ ထည့်ထားပါ။ ကြော်မည့်အိုးထဲကို
              ဆီထည့် ဆီပူအောင်တည်ထားပါ။ ဆီပူလာလျှင် ကြက်သားကို ပေါင်မုန့်ခြောက်
              မှုန့်များ အသားမှာ ကပ်အောင်လုပ်ပြီး ဆီပူထဲထည့်ကြော်​ပေးပါ။
              အဝါရောင်သန်းလာရင် ဆယ် ဆီစစ်ရင်ရပြီနော် ခရမ်းချဥ်သီးဆောစ့်
              ငရုပ်သီးဆော့စ် ကြိုက်ရာ သုံးဆောင်ပါရှင်
            </Text>
          </Box>
        ) : (
          <Box className="mx-3 p-3">
            <Text>
              ပါ၀င်သောပစ္စည်းများ ကြက်ရင်ပုံသား ......၂၅ ကျပ်သား ဆား
              ....အနည်းငယ် ငရုတ်ကောင်း ....အနည်းငယ် ခရုဆီ.... အနည်းငယ်
              သကြား.....အနည်းငယ် တန်ပူရာမှုန့်....... ထမင်းစားဇွန်း ၅ ဇွန်း
              ပြောင်းကော်မှုန့်......။ ၁ဇွန်း ကြ က် ဥ..... ၁ လုံး
              ပဲငံပြာရည်..... အနည်းငယ် ပေါင်မုန့်ခြောက်မှုန့်......လိုသလောက်
              ကြော်ရန် ဆီ
            </Text>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
}
