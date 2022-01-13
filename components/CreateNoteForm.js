import React, { useState } from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";

import Button from "./Button";

function CreateNoteForm({ onCreate, ...props }) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <>
      <TextInput
        placeholder="Titulo"
        style={tw`p-2 rounded-xl border border-gray-200`}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Cuerpo de la nota"
        style={tw`p-2 rounded-xl border border-gray-200 mt-4`}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        value={body}
        onChangeText={setBody}
      />
      <View style={tw`mt-8`}>
        <Button title="Agregar" onCreate={() => onCreate({ title, body })} />
      </View>
    </>
  );
}

export default CreateNoteForm;
