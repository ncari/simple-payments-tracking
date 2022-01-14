import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";

import SmallCard from "./SmallCard";

function Payment({ client, amount, datetime }) {
  return (
    <SmallCard>
      <SmallCard.Left>
        <Image
          source={{ uri: "https://source.unsplash.com/user/c_v_r/100x100" }}
          style={tw`h-12 w-12 rounded-xl`}
        />
        <View style={tw`ml-4`}>
          <Text style={tw`text-blue-800`}>{client}</Text>
          <Text style={tw`text-xs text-gray-400 mt-1`}>{datetime}</Text>
        </View>
      </SmallCard.Left>
      <SmallCard.Right>
        <Text style={tw`text-green-400`}>${amount}</Text>
      </SmallCard.Right>
    </SmallCard>
  );
}

export default Payment;
