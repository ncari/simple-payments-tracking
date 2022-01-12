import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const Cell = ({ i, onPress }) => (
  <TouchableOpacity
    key={i}
    style={tw`rounded-full justify-center items-center h-20 w-20 border border-gray-200`}
    onPress={() => onPress(i)}
  >
    <Text style={tw`text-3xl text-blue-900`}>{i}</Text>
  </TouchableOpacity>
);

function Numpad({ style, onNumber, onDelete, onDot }) {
  return (
    <View style={style}>
      <View style={tw`flex-row justify-between`}>
        <Cell i={1} onPress={onNumber} />
        <Cell i={2} onPress={onNumber} />
        <Cell i={3} onPress={onNumber} />
      </View>
      <View style={tw`flex-row justify-between mt-2`}>
        <Cell i={4} onPress={onNumber} />
        <Cell i={5} onPress={onNumber} />
        <Cell i={6} onPress={onNumber} />
      </View>
      <View style={tw`flex-row justify-between mt-2`}>
        <Cell i={7} onPress={onNumber} />
        <Cell i={8} onPress={onNumber} />
        <Cell i={9} onPress={onNumber} />
      </View>
      <View style={tw`flex-row justify-between mt-2`}>
        <Cell i={0} onPress={onNumber} />
        <Cell i={`.`} onPress={onDot} />
        <Cell i={"Del"} onPress={onDelete} />
      </View>
    </View>
  );
}

export default Numpad;
