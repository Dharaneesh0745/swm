import { StatusBar, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>App Component</Text>
      <StatusBar barStyle="default" />
      <Link href="/Home" className="mt-4 text-blue-500">
        Go to Home Page
      </Link>
    </View>
  );
};

export default App;
