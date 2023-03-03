import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MoimHeader } from "./components/MoimHeader";
import { Spacer } from "../../components/Spacer";
import { HomeEventList } from "./components/HomeEventList";
import { HomeHashtagList } from "./components/HomeHashtagList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const HomeScreen: React.FC = () => {
  const homenavigation = useNavigation();
  const onPressEvent = useCallback(() => {
    homenavigation.navigate("Event" as never);
  }, [homenavigation]);
  const onPressHashtag = useCallback(() => {
    homenavigation.navigate("HashTag" as never);
  }, [homenavigation]);
  return (
    <View style={{ backgroundColor: "white" }}>
      <MoimHeader showBackButton={false} />
      <Spacer size={20} />
      <ScrollView style={HomeScreenStyle.container}>
        <HomeHashtagList onPressHashtag={onPressHashtag} />
        <HomeEventList onPressEvent={onPressEvent} />
      </ScrollView>
    </View>
  );
};

const HomeScreenStyle = StyleSheet.create({
  container: {},
});
