import React, { useLayoutEffect } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import CreateNoteForm from "../components/CreateNoteForm";

import useDatabase from "../services/hooks/useDatabase";

function NoteDetails({ route, navigation }) {
  const { id, title, body, datetime } = route.params;
  const db = useDatabase();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleDelete}
          style={tw`rounded-xl px-4 py-2 bg-red-600`}
        >
          <Text style={tw`text-white font-bold text-xs`}>Eliminar</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleDelete = () => {
    db.transaction((tx) => {
      tx.executeSql(`delete from notes where id=?;`, [id]);
    });
    navigation.navigate("Notes", { update: true });
  };

  return (
    <ScrollView style={tw`bg-white p-4`}>
      <CreateNoteForm title={title} body={body} onCreate={() => {}} />
    </ScrollView>
  );
}

export default NoteDetails;
