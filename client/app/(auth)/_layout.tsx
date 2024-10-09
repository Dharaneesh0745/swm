import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor="white" style="light" />
    </>
  );
};

export default AuthLayout;
