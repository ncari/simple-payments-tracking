import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useState } from "react/cjs/react.development";
import tw from "twrnc";

import Payment from "../components/Payment";
import useDatabase from "../services/hooks/useDatabase";

function Payments() {
  const db = useDatabase();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(`select * from payments;`, [], (_, { rows: { _array } }) =>
        setPayments(_array)
      );
    });
  }, []);

  return (
    <FlatList
      data={payments}
      renderItem={({ item }) => (
        <Payment
          amount={item.amount}
          client={item.client}
          datetime={item.datetime}
        />
      )}
      keyExtractor={(item) => item.id}
      style={tw`bg-white p-4`}
      conten
      ItemSeparatorComponent={() => <View style={tw`mt-2`} />}
    />
  );
}

export default Payments;
