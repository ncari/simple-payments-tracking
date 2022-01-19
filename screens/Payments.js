import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import Payment from "../components/Payment";
import useDatabase from "../services/hooks/useDatabase";
import PaymentsListHeader from "../components/PaymentsListHeader";
import { _addDays, _formatDate, _yyyy_mm_dd } from "../helpers/date";
import PaymentsLineChart from "../components/PaymentsLineChart";

function Payments({ navigation, route }) {
  const db = useDatabase();
  const [payments, setPayments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [totalPayments, setTotalPayments] = useState(null);
  const [paymentsHistory, setPaymentsHistory] = useState([]);

  const getPayments = () => {
    // used to get payments in current day
    const start = _formatDate(date, 0, 0, 0);
    const end = _formatDate(date, 23, 59, 59);

    // used to get payments within 7 days
    const startMinus3 = _formatDate(_addDays(date, -3), 0, 0, 0);
    const startPlus3 = _formatDate(_addDays(date, 3), 23, 59, 59);

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
      );
      tx.executeSql(
        `SELECT DATE(datetime) as date, SUM(amount) as total FROM payments where datetime between ? and ? GROUP BY DATE(datetime);`,
        [startMinus3, startPlus3],
        (_, { rows: { _array }}) => setPaymentsHistory(_array),
      );
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
      style={tw`bg-white pb-4`}
      contentContainerStyle={tw`p-4`}
      ItemSeparatorComponent={() => <View style={tw`mt-2`} />}
      ListHeaderComponent={<PaymentsListHeader onChangeDate={setDate} date={date} total={totalPayments} />}
      ListHeaderComponentStyle={tw`mb-4`}
      ListFooterComponent={paymentsHistory.length >= 7 && (
        <View style={tw`mx-4`}>
          <Text style={tw`text-xs text-gray-400`}>Pagos ultimos 7 dias</Text>
          <PaymentsLineChart data={paymentsHistory.map(v => v.total)} date={date}/>
        </View>
      )}
      ListFooterComponentStyle={tw`mt-8`}
    />
  );
}

export default Payments;
