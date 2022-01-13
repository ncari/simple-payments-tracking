import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useState } from "react/cjs/react.development";
import tw from "twrnc";

import Payment from "../components/Payment";
import useDatabase from "../services/hooks/useDatabase";
import DateTimePicker from "../components/DateTimePicker";

function Payments({ navigation, route }) {
  const db = useDatabase();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (route.params && route.params.updatePayments) {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from payments order by datetime desc;`,
          [],
          (_, { rows: { _array } }) => setPayments(_array)
        );
      });
    }
  }, [route.params]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from payments order by datetime desc;`,
        [],
        (_, { rows: { _array } }) => setPayments(_array)
      );
    });
  }, []);

  return (
    <FlatList
      data={payments}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("PaymentDetails", item)}
        >
          <Payment
            amount={item.amount}
            client={item.client}
            datetime={item.datetime}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      style={tw`bg-white p-4`}
      conten
      ItemSeparatorComponent={() => <View style={tw`mt-2`} />}
      ListHeaderComponent={DateTimePicker}
      ListHeaderComponentStyle={tw`mb-4`}
    />
  );
}

export default Payments;
