import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React from 'react';

export default function Data() {
    const line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: 2, // optional
        },
      ],
    };

    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 24}}>
          Your stock
        </Text>
        <LineChart
          data={line}
          width={400}
          height={300}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: useColorScheme() === 'light' ? '#ffffff' : '#000000',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    )
}