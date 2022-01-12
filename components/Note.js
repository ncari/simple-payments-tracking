import React from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

import SmallCard from "./SmallCard";

function Note() {
  return (
    <SmallCard>
      <SmallCard.Left>
        <Image
          source={{ uri: "https://source.unsplash.com/user/c_v_r/100x100" }}
          style={tw`h-12 w-12 rounded-xl`}
        />
        <View style={tw`ml-4`}>
          <Text style={tw`text-blue-800`}>El titulo de la nota</Text>
          <Text style={tw`text-xs text-gray-400 mt-1`}>12/01/2022</Text>
        </View>
      </SmallCard.Left>
    </SmallCard>
  );
}

export default Note;
