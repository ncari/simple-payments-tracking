import React, { useState, useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";

import useDatabase from "../services/hooks/useDatabase";
import Label from "../components/Label";

function PaymentDetails({ route, navigation }) {
  const { amount, client, datetime, id } = route.params;
  const [description, setDescription] = useState(route.params.description || '');
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

  const updateDescription = () => {
    db.transaction((tx) => {
      tx.executeSql(`update payments set description = ? where id = ?;`, [description, id]);
    });
  }

  const handleDelete = () => {
    db.transaction((tx) => {
      tx.executeSql(`delete from payments where id=?;`, [id]);
    });
    navigation.navigate("Payments");
  };

  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      {/*basic info*/}
      <Text style={tw`text-xs text-gray-400`}>Informacion basica</Text>
      <View style={tw`mt-4`}>
        <Label title="Cliente" value={client} />
        <Label title="Monto" value={`$${amount}`} style={tw`mt-2`} />
        <Label title="Fecha" value={datetime} style={tw`mt-2`} />
      </View>
      <TextInput
        placeholder="Descripcion"
        style={tw`p-2 rounded-xl border border-gray-200 mt-8`}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
        onEndEditing={updateDescription}
      />

      {/* notes */}
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`text-xs text-gray-400 mt-8`}>Mis notas</Text>
        <Text style={tw`text-xs text-gray-400 mt-8`}>+ Nuevo</Text>
      </View>
      <View style={tw`mt-4`} />
    </ScrollView>
  );
}

export default PaymentDetails;
