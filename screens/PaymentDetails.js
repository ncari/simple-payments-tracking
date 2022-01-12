import React from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import tw from "twrnc";

import Note from "../components/Note";

const Label = ({ title, value, style }) => (
  <View style={[tw`flex-row`, style]}>
    <Text style={tw`text-blue-800`}>{title}</Text>
    <Text style={tw`text-blue-800 ml-8 font-bold`}>{value}</Text>
  </View>
);

function PaymentDetails({ route }) {
  const { value, client } = route.params;
  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      {/*basic info*/}
      <Text style={tw`text-xs text-gray-400`}>Informacion basica</Text>
      <View style={tw`mt-4`}>
        <Label title="Cliente" value={client} />
        <Label title="Monto" value={`$ ${value}`} style={tw`mt-2`} />
      </View>
      <TextInput
        placeholder="Descripcion"
        style={tw`p-2 rounded-xl border border-gray-200 mt-8`}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
      />

      {/* notes */}
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-xs text-gray-400 mt-8`}>Mis notas</Text>
        <Text style={tw`text-xs text-gray-400 mt-8`}>+ Nuevo</Text>
      </View>
      <View style={tw`mt-4`} />
      <Note />
    </ScrollView>
  );
}

export default PaymentDetails;
