import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

interface GetStartedButtonProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyles?: string;
  isLoading: boolean;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-green-600 rounded-xl min-h-[52px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-white font-semibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default GetStartedButton;
