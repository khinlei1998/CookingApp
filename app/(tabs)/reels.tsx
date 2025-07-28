import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { ProductList } from "@/data";
import VideoPlay from "@/components/VideoPlay";
import { VideoView, VideoSource, useVideoPlayer } from "expo-video";

export default function Reels() {
  const videoSource = [
    {
      id: 1,
      videoUri:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      videoUri:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = { itemVisiblePercentThreshold: 20 };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "yellow" }}>
      <FlatList
        data={videoSource}
        renderItem={({ item, index }) => (
          <VideoPlay
            videoUri={item.videoUri}
            shouldPlay={index === currentIndex}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        //   onViewableItemsChanged={onViewableItemsChanged}
        //   viewabilityConfig={viewabilityConfig}
      />
    </SafeAreaView>
  );
}
