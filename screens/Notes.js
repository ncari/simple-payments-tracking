import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import Note from "../components/Note";
import useDatabase from "../services/hooks/useDatabase";

function Notes({ navigation, route }) {
  const db = useDatabase();
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from notes order by datetime desc;`,
        [],
        (_, { rows: { _array } }) => setNotes(_array)
      );
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (route.params && route.params.update) getNotes();
  }, [route.params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateNote")}
          style={tw`rounded-full h-8 w-8 bg-blue-400 justify-center items-center`}
        >
          <Text style={tw`text-white text-base`}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      style={tw`bg-white p-4`}
      ItemSeparatorComponent={() => <View style={tw`mt-2`} />}
      data={notes}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("NoteDetails", item)}
        >
          <Note title={item.title} datetime={item.datetime} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, i) => i}
    />
  );
}

export default Notes;
