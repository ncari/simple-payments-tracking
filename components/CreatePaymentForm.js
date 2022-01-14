import React, { useState } from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";
import Button from "./Button";

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

  const handleCreate = async () => {
    await onCreate({
      client,
      value,
    });
    setValue("");
    setClient("");
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
        style={[
          tw`px-4 py-2 border border-gray-200 rounded-xl text-4xl font-bold mt-4 text-gray-200`,
          value !== "" && tw`border border-blue-600 text-blue-900`,
        ]}
        value={`$ ${value}`}
      />
      <Numpad
        style={tw`p-6`}
        onNumber={handleNumber}
        onDelete={handleDelete}
        onDot={handleDot}
      />
      <View style={tw`mt-4`}>
        <Button title="Agregar" onCreate={handleCreate} />
      </View>
    </View>
  );
}

export default CreatePaymentForm;
