import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import tw from 'twrnc';

import { _formatDate, _yyyy_mm_dd } from '../helpers/date';

export default function PaymentsLineChart({ data, date }){
    return (
        <LineChart
          data={{
            labels: ['', '', '', _yyyy_mm_dd(_formatDate(date, 0, 0, 0)), '', '', ''],
            datasets:[
              {
                data
              }
            ]
          }}
        width={Dimensions.get("window").width * 0.9} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: tw.color('white'),
          backgroundGradientFrom: tw.color('white'),
          backgroundGradientTo: tw.color('white'),
          color: (opacity = 1) => tw.color('blue-600'),
          labelColor: (opacity = 1) => tw.color('gray-400'),
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: tw.color('blue-200')
          },
        }}
        bezier
        style={tw`mt-4 rounded-xl`}
        withInnerLines={false}
        withOuterLines={false}
      />
    )
}