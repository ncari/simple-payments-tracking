import React from "react";
import { FlatList, View } from "react-native";
import tw from "twrnc";

import Payment from "../components/Payment";

function Payments() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      renderItem={Payment}
      keyExtractor={(item, i) => i}
      style={tw`bg-white p-4`}
      conten
      ItemSeparatorComponent={() => <View style={tw`mt-2`} />}
    />
  );
}

export default Payments;
