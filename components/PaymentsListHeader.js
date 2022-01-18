import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

import DateTimePicker from './DateTimePicker';

export default function PaymentsListHeader({ date, onChangeDate, total}){
    return (
        <View>
        <DateTimePicker date={date} onChange={onChangeDate}/>
        {total && (
        <View style={tw`flex-row items-center mt-4 self-end`}>
          <Text style={tw`text-xs text-gray-400`}>Total: </Text>
          <Text style={tw`text-xs text-green-400`}>${total}</Text>
        </View>
        )}
        
      </View>
    )
}