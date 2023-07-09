import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import CurrentPrice from "./src/components/CurrentPrice";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style backgroundColor="#f50d41" barStyle="dark-content" />
      <CurrentPrice />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
