import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

function DateTimePicker() {
  const today = new Date();
  return (
    <View style={tw`flex-row justify-between bg-gray-200 rounded-xl`}>
      <View style={tw`p-4 rounded-xl bg-blue-500`}>
        <Text style={tw`text-white`}>
          {days[today.getDay()]} {today.getDate()}
        </Text>
      </View>
      <View style={tw`flex-row justify-evenly flex-1`}>
        <View style={tw`p-4 rounded-xl bg-gray-200`}>
          <Text style={tw`text-gray-400`}>{months[today.getMonth()]}</Text>
        </View>
        <View style={tw`p-4 rounded-xl bg-gray-200`}>
          <Text style={tw`text-gray-400`}>{today.getFullYear()}</Text>
        </View>
      </View>
    </View>
  );
}

export default DateTimePicker;
