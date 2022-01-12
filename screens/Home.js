import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import tw from "twrnc";

import CreatePaymentForm from "../components/CreatePaymentForm";

export default function Home({ navigation }) {
  const handleCreate = ({ value, client }) => {
    navigation.navigate("PaymentDetails", { value, client });
  };
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <CreatePaymentForm onCreate={handleCreate} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
