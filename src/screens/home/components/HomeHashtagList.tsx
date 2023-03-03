import React from "react";
import { View } from "react-native";
import { HashtagButton } from "./HashtagButton";
import {
  widthPercentageToDP as wpSize,
  heightPercentageToDP as hpSize,
} from "react-native-responsive-screen";

const wp = wpSize("100%");
const hp = hpSize("100%");

export const HomeHashtagList: React.FC<{ onPressHashtag: () => void }> = (
  props
) => {
  return (
    <View
      style={{
        width: wp,
        paddingHorizontal: wp * 0.05,
        marginTop: hp * 0.03 * -1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <HashtagButton
          source={require("../../../assets/rice.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"음식"}
        />
        <HashtagButton
          source={require("../../../assets/coffee.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"커피"}
        />
        <HashtagButton
          source={require("../../../assets/book.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"스터디"}
        />
        <HashtagButton
          source={require("../../../assets/brush.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"예술"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: hp * 0.03 * -1,
        }}
      >
        <HashtagButton
          source={require("../../../assets/carrier.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"여행"}
        />
        <HashtagButton
          source={require("../../../assets/lego.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"취미"}
        />
        <HashtagButton
          source={require("../../../assets/mic.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"공연"}
        />
        <HashtagButton
          source={require("../../../assets/allView.png")}
          onPressHashtag={props.onPressHashtag}
          iconName={"전체보기"}
        />
      </View>
    </View>
  );
};
