import React from "react";
import { ScrollView } from "react-native";
import tw from "twrnc";

import CreateNoteForm from "../components/CreateNoteForm";
import useDatabase from "../services/hooks/useDatabase";

function CreateNote({ navigation }) {
  const db = useDatabase();

  const handleCreate = ({ title, body }) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into notes (title, body, datetime) values (?, ?, datetime('now'))",
          [title, body]
        );
      },
      null,
      () => navigation.navigate("Notes", { update: true })
    );
  };
  return (
    <ScrollView style={tw`bg-white p-4`}>
      <CreateNoteForm onCreate={handleCreate} />
    </ScrollView>
  );
}

export default CreateNote;
