import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function Label({ title, value, style }){
    return (
        <View style={[tw`flex-row`, style]}>
            <Text style={tw`w-1/5 text-blue-900 text-base`}>{title}</Text>
            <Text style={tw`w-4/5 text-blue-900 ml-8 text-base font-bold`}>
                {value}
            </Text>
        </View>
    )
};