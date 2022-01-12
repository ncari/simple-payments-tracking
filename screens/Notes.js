import React from "react";
import { FlatList, View } from "react-native";
import tw from "twrnc";

import Note from "../components/Note";

function Notes() {
  return (
    <FlatList
      style={tw`bg-white p-4`}
      conten
      ItemSeparatorComponent={() => <View style={tw`mt-2`} />}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      renderItem={Note}
      keyExtractor={(item, i) => i}
    />
  );
}

export default Notes;
