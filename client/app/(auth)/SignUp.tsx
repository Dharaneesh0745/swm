import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/Home" className="mt-4 text-blue-500">
        Go to Home
      </Link>
      <StatusBar barStyle="default" />
    </View>
  );
};

export default SignUp;
