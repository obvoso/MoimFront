import React, { useCallback } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wpSize,
  heightPercentageToDP as hpSize,
} from "react-native-responsive-screen";

const wp = wpSize("100%");
const hp = hpSize("100%");

export const HashtagButton: React.FC<{
  source: number;
  iconName: string;
  onPressHashtag: () => void;
}> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressHashtag}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={props.source}
          style={hashtagButtonStyle.hashtagButton}
          resizeMode="contain"
        />
        <Text
          style={{
            marginTop: wp * 0.08 * -1,
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
    width: wp * 0.2,
    height: hp * 0.2,
  },
});
