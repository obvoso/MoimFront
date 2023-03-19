import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageButton from "../../components/ImageButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wpSize,
  heightPercentageToDP as hpSize,
} from "react-native-responsive-screen";
import { useAppDispatch } from "../../redux/RootStore";
import { SearchSlice } from "../../redux/Slices/Search";

type RootStackParamList = {
  Home: undefined;
};

const wp = wpSize("100");
const hp = hpSize("100%");

export const SearchHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressBack = () => {;
    dispatch(SearchSlice.actions.reset());
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={["top"]}>
      <View style={styleHeader.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: wp * 0.9,
          }}
        >
          <ImageButton
            onPress={onPressBack}
            style={styleHeader.backButton}
            source={require("../../assets/BackButton.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styleHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: hp * 0.09,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    backgroundColor: "white",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp * 0.9,
  },
  backButton: {
    paddingBottom: hp * 0.005,
    width: wp * 0.13,
    height: hp * 0.13,
  },
});
