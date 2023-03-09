import React, { useCallback } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const HashtagButton: React.FC<{
  source: number;
  iconName: string;
  hashtag: number,
  onPressHashtag: (hashtag: number) => void;
}> = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPressHashtag(props.hashtag)}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={props.source} style={hashtagButtonStyle.hashtagButton} />
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {props.iconName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const hashtagButtonStyle = StyleSheet.create({
  hashtagButton: {
    width: 70,
    height: 70,
  },
});
