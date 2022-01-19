import React, { useLayoutEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import useDatabase from "../services/hooks/useDatabase";

function NoteDetails({ route, navigation }) {
  const { id, body, datetime } = route.params;
  const db = useDatabase();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleDelete}
          style={tw`rounded-xl px-4 py-2`}
        >
          <Text style={tw`text-white text-red-600`}>Eliminar</Text>
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
      <Text style={tw`p-2 rounded-xl border border-gray-200 mt-4`}>
        {body}
      </Text>
      <View style={tw`flex-row justify-between mt-8`}>
        <Text style={tw`text-xs text-gray-400`}>Imagenes</Text>
        <Text style={tw`text-xs text-gray-400`}>+ Nuevo</Text>
      </View>
    </ScrollView>
  );
}

export default NoteDetails;
