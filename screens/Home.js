import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import tw from "twrnc";

import CreatePaymentForm from "../components/CreatePaymentForm";
import useDatabase from "../services/hooks/useDatabase";

export default function Home({ navigation }) {
  const db = useDatabase();

  const handleCreate = async ({ value, client }) => {
    return db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into payments (client, amount, datetime) values (?, ?, datetime('now'))",
          [client, value]
        );
      },
      null,
      null
    );
  };
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <CreatePaymentForm onCreate={handleCreate} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
