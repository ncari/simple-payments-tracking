import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useState } from "react/cjs/react.development";
import tw from "twrnc";

import Payment from "../components/Payment";
import useDatabase from "../services/hooks/useDatabase";
import PaymentsListHeader from "../components/PaymentsListHeader";

// yyyy-mm-ddT:hh:mm:ss.sssZ -> yyyy-mm-dd hh:mm:ss
const _formatDate = (date, h, m, s) => {
  let _date = date;
  _date.setUTCHours(h,m,s);
  _date = _date.toISOString().replace('T', ' ');
  _date = _date.replace(/\.[0-9][0-9][0-9]Z/, '');
  return _date;
}

function Payments({ navigation, route }) {
  const db = useDatabase();
  const [payments, setPayments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [totalPayments, setTotalPayments] = useState(null);

  const getPayments = () => {
    const start = _formatDate(date, 0, 0, 0);
    const end = _formatDate(date, 23, 59, 59);

    db.transaction((tx) => {
      tx.executeSql(
        `select * from payments where datetime between ? and ? order by datetime desc;`,
        [start, end],
        (_, { rows: { _array } }) => setPayments(_array)
      );
      tx.executeSql(
        `select sum(amount) as total from payments where datetime between ? and ?;`,
        [start, end],
        (_, { rows: { _array }}) => setTotalPayments(_array[0].total)
      )
    });
  }

  useEffect(() => {
    if (route.params && route.params.updatePayments) {
      getPayments();
    }
  }, [route.params]);

  useEffect(() => {
    getPayments();
  }, [date]);

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
      ListHeaderComponent={<PaymentsListHeader onChangeDate={setDate} date={date} total={totalPayments} />}
      ListHeaderComponentStyle={tw`mb-4`}
    />
  );
}

export default Payments;
