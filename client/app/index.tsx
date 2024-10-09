import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import GetStartedButton from "@/components/CustomButtons.tsx/GetStartedButton";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.get}
            className="max-w-[300px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative">
            <Text className="text-4xl text-center font-bold mt-5">
              Recycle waste for a sustainable future.
            </Text>
            <Image
              source={images.path}
              className="w-[150px] h-[18px] absolute -bottom-3 -right-2"
              resizeMode="contain"
            />
          </View>
          <View className="relative mt-5">
            <Text className="text-xl text-center font-normal">
              Earth provides enough to satisfy every man's needs, but not every
              man's greed.
            </Text>
          </View>
          <View className="relative mt-2">
            <Text className="text-xl text-green-600 text-center font-bold">
              - Mahatma Gandhi
            </Text>
          </View>
          <GetStartedButton
            title="Get Started"
            handlePress={() => router.push("/SignIn")}
            containerStyle="w-full mt-16"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="white" style="light" />
    </SafeAreaView>
  );
};

export default App;
