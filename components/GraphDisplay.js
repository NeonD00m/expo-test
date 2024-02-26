import { LineChart } from 'react-native-chart-kit';
import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import React from 'react';

export default function GraphDisplay({graph, style, width, height}) {
  return (
    <LineChart
      data={graph}
      width={width || 335}
      height={height || 195}
      yAxisLabel={'$'}
      chartConfig={{
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',//'#d1d1d1',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 20,
          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
        }
      }}
      bezier
      style={style || styles.chart}
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    marginTop: 26,
    // borderRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    width: "100%",
    height: "100%",
  },
});