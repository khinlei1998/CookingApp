import { Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { Image } from "expo-image";
type CategoryProps = {
  id: number;
  name: string;
  image: string;
};
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Category({ id, name, image }: CategoryProps) {
  const [select, setSelect] = useState(1);
  const { width } = Dimensions.get("window");
  const cardSize = width * 0.22; // 22% of screen width
  console.log("name", name);
  return (
    <Pressable
      className="items-center"
      onPress={() => setSelect(id)}
      onLayout={(event) => {
        const { height } = event.nativeEvent.layout;
        console.log("Item Height C:", height);
      }}
    >
      <Card
        size="lg"
        className={`items-center rounded-full bg-slate-100 ${select === id ? "border border-orange" : ""}`}
        key={id}
      >
        <Image
          style={[{ width: 30, height: 30 }]}
          source={image}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </Card>
      <Text size="lg" className={`font-poppins mt-4 font-medium text-black`}>
        {name}
      </Text>
    </Pressable>

    // <Pressable>
    //   <Card
    //     className={`items-center rounded-full bg-slate-100 ${select === id ? "border border-orange" : ""}`}
    //     size="lg"
    //   >
    //     <Image
    //       style={[
    //         { width: 30, height: 30 },
    //         select === id
    //           ? { borderRadius: 28, borderWidth: 2, borderColor: "orange" }
    //           : { borderRadius: 28 },
    //       ]}
    //       source={image}
    //       placeholder={{ blurhash }}
    //       contentFit="cover"
    //       transition={1000}
    //     />
    //     <Text size="sm" bold>
    //       {name}
    //     </Text>
    //   </Card>
    // </Pressable>
  );
}
