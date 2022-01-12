import React from "react";
import { View } from "react-native";
import tw from "twrnc";

function SmallCard({ children }) {
  return (
    <View
      style={tw`flex-row justify-between items-center rounded-xl border border-gray-100 p-4`}
    >
      {children}
    </View>
  );
}

SmallCard.Left = ({ children }) => (
  <View style={tw`flex-row items-center`}>{children}</View>
);
SmallCard.Right = ({ children }) => (
  <View style={tw`flex-row items-center`}>{children}</View>
);

export default SmallCard;
