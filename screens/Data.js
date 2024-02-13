import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import { DatapointFrame } from './components/DatapointFrame';
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
        {/* put a scrolling list of favorited stats */}
        <DatapointFrame name="Round Square Ltd." graphData={line} />
      </View>
    )
}