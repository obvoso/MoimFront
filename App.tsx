import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TabBar } from "./src/navigations/TabbarNavigation";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/redux/RootStore";

export enum hashtagType {
  FOOD = 1,
  COFFEE = 2,
  STUDY = 3,
  ART = 4,
  TRAVEL = 5,
  HOBBIES = 6,
  SHOW = 7,
  ALL_VIEW = 8,
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={{ flex: 1 }}>
            <TabBar />
          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
