import { StyleSheet, Text, View, Button, Appearance, useColorScheme, SafeAreaView } from 'react-native';
import DatapointFrame from '../components/DatapointFrame';
import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { getTestData } from '../modules/GetData';
import GraphDisplay from '../components/GraphDisplay';

export default function Data() {
    const realGDP = getTestData();
    //later change this into a scrolling view

    return (
      <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "flex-start"}}>
        {/* put a scrolling list of favorited stats */}
        {/* <DatapointFrame name="Round Square Ltd." graphData={line} /> */}
        <Text style={styles.title}>
          Bookmarked
        </Text>
        <GraphDisplay graph={realGDP.graph} width={420} height={300}/>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  }
})