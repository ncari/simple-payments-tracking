import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
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

function MyDateTimePicker({ date, onChange }) {
  const _date = date || new Date();
  const [open, setOpen] = useState(false);

  const handleOnChange = (e, d) => {
    setOpen(false);
    if(onChange && d)
      onChange(d);
  }

  return (
    <>
    <TouchableOpacity style={tw`flex-row justify-between bg-gray-200 rounded-xl`} onPress={() => setOpen(true)}>
      <View style={tw`p-4 rounded-xl bg-blue-500`}>
        <Text style={tw`text-white`}>
          {days[_date.getDay()]} {_date.getDate()}
        </Text>
      </View>
      <View style={tw`flex-row justify-evenly flex-1`}>
        <View style={tw`p-4 rounded-xl bg-gray-200`}>
          <Text style={tw`text-gray-400`}>{months[_date.getMonth()]}</Text>
        </View>
        <View style={tw`p-4 rounded-xl bg-gray-200`}>
          <Text style={tw`text-gray-400`}>{_date.getFullYear()}</Text>
        </View>
      </View>
    </TouchableOpacity>
    {open && (
        <DateTimePicker
          testID="dateTimePicker"
          value={_date}
          mode={'date'}
          onChange={handleOnChange}
        />
      )}
    </>
  );
}

export default MyDateTimePicker;
