import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFormField from "@/components/Forms/AuthFormField";
import GetStartedButton from "@/components/CustomButtons.tsx/GetStartedButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {};

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl font-semibold mt-10">
            Register an account
          </Text>

          <AuthFormField
            title="User Name"
            value={form.userName}
            handleChange={(value: any) => setForm({ ...form, userName: value })}
            otherStyles="mt-7"
            placeholder="Enter username"
          />
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
          <AuthFormField
            title="Phone Number"
            value={form.phoneNumber}
            handleChange={(value: any) =>
              setForm({ ...form, phoneNumber: value })
            }
            otherStyles="mt-7"
            placeholder="Enter phone number"
          />

          <GetStartedButton
            title="Register"
            handlePress={onSubmit}
            containerStyle="w-full mt-20"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-10 flex-row gap-2">
            <Text className="text-base text-gray-600">
              Have have an account?
            </Text>
            <Link href={"/SignIn"} className="text-base text-green-600">
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
