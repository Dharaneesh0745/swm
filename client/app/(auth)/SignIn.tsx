import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFormField from "@/components/Forms/AuthFormField";
import GetStartedButton from "@/components/CustomButtons.tsx/GetStartedButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {
    router.push("/Home");
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl font-semibold mt-10">
            Log in to your account
          </Text>

          <AuthFormField
            title="Email"
            value={form.email}
            handleChange={(value: any) => setForm({ ...form, email: value })}
            otherStyles="mt-7"
            keyBoardType="email-address"
            placeholder="Enter email"
          />
          <AuthFormField
            title="Password"
            value={form.password}
            handleChange={(value: any) => setForm({ ...form, password: value })}
            otherStyles="mt-7"
            placeholder="Enter password"
          />

          <GetStartedButton
            title="Login"
            handlePress={onSubmit}
            containerStyle="w-full mt-20"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-10 flex-row gap-2">
            <Text className="text-base text-gray-600">
              Don't have an account?
            </Text>
            <Link href={"/SignUp"} className="text-base text-green-600">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
