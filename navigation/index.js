import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";

import Home from "../screens/Home";
import PaymentDetails from "../screens/PaymentDetails";
import Payments from "../screens/Payments";
import Notes from "../screens/Notes";
import tw from "twrnc";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => {
              return ["Payments", "Notes"].map((t) => (
                <TouchableOpacity
                  style={tw`px-4 py-2 rounded-xl bg-blue-400 mr-1 `}
                  onPress={() => navigation.navigate(t)}
                >
                  <Text style={tw`text-white font-bold text-xs`}>{t}</Text>
                </TouchableOpacity>
              ));
            },
          })}
        />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
