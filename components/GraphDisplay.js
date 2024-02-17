import { LineChart } from 'react-native-chart-kit';
import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import React from 'react';

export default function GraphDisplay({graph}) {
  return (
    <LineChart
      data={graph}
      width={300}
      height={200} //FIND A NEW GRAPHING LIBRARY BECAUSE THIS SUCKS
      yAxisLabel={'$'}
      chartConfig={{
        backgroundColor: useColorScheme() === 'light' ? '#ffffff' : '#000000',
        // backgroundGradientFrom: '#fb8c00',
        // backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      bezier
      style={styles.chart}
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    borderRadius: 16,
    width: "100%",
    height: "100%"
  },
});