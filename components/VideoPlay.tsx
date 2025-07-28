import { View, Text, Dimensions } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useVideoPlayer, VideoView } from "expo-video";

export default function VideoPlay({
  videoUri,
  shouldPlay,
}: {
  videoUri: any;
  shouldPlay: boolean;
}) {
  const { height } = Dimensions.get("screen");

  const player1 = useVideoPlayer(videoUri, (player) => {
    player.play();
  });

  useEffect(() => {
    if (shouldPlay) {
      player1.play();
    } else {
      player1.pause();
    }
  }, [shouldPlay]);

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      {/* <Text>hello</Text> */}
      <VideoView
        style={{ width: "100%", height }}
        player={player1}
        // nativeControls={false}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  );
}
