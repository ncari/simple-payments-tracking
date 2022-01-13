import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

function Button({ title, onCreate }) {
  return (
    <TouchableOpacity
      style={tw`p-4 bg-blue-800 rounded-xl flex-row justify-center`}
      onPress={onCreate}
    >
      <Text style={tw`text-white`}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
