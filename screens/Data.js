import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import DatapointFrame from '../components/DatapointFrame';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "flex-start"}}>
        {/* put a scrolling list of favorited stats */}
        {/* <DatapointFrame name="Round Square Ltd." graphData={line} /> */}
        <Text>
          S&P 500
        </Text>
      </SafeAreaView>
    )
}