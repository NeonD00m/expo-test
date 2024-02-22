import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import DatapointFrame from '../components/DatapointFrame';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getTestData } from '../modules/GetData';
import GraphDisplay from '../components/GraphDisplay';

export default function Data() {
    const line = getTestData();
    //later change this into a scrolling view

    return (
      <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "flex-start"}}>
        {/* put a scrolling list of favorited stats */}
        {/* <DatapointFrame name="Round Square Ltd." graphData={line} /> */}
        <Text>
          S&P 500
        </Text>
        {/* <GraphDisplay /> */}
      </SafeAreaView>
    )
}