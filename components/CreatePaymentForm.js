import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

import Numpad from "./Numpad";

function CreatePaymentForm({ onCreate }) {
  const [value, setValue] = useState("");
  const [client, setClient] = useState("");

  const handleNumber = (v) => {
    setValue(`${value}${v}`);
  };
  const handleDelete = () => {
    setValue((v) => v.slice(0, -1));
  };
  const handleDot = () => {
    if (!value.includes(".")) setValue(`${value}.`);
  };

  const handleCreate = () => {
    onCreate({
      client,
      value,
    });
  };

  return (
    <View style={tw`p-4 flex-1`}>
      <TextInput
        placeholder="Cliente"
        style={tw`p-2 rounded-xl border border-gray-200`}
        onChangeText={setClient}
        value={client}
      />
      <TextInput
        placeholder="$"
        style={tw`p-2 border-2 border-blue-700 rounded-xl text-4xl font-bold mt-4`}
        value={`$ ${value}`}
      />
      <Numpad
        style={tw`p-6`}
        onNumber={handleNumber}
        onDelete={handleDelete}
        onDot={handleDot}
      />
      <TouchableOpacity
        style={tw`p-4 bg-blue-800 rounded-xl flex-row justify-center`}
        onPress={handleCreate}
      >
        <Text style={tw`text-white`}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreatePaymentForm;
