//for when the user clicks on a DatapointFrame
import { StyleSheet, Text, View, Button, Appearance, useColorScheme, ScrollView } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import GraphDisplay from './GraphDisplay';
import React from 'react';

export default function DataWindow({visible, toggle, state}) {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  return (
    <View style={{
      width: frame.width, height: frame.height,
      backgroundColor: "#808080",
      position: "absolute", top: insets.top, left: insets.left, bottom: insets.bottom, right: insets.right,
      alignContent: "flex-start", justifyContent: "center", display: visible ? 'flex' : 'none'
    }}>
      <View style={{width: "100%", borderBottomWidth: "0.1%", borderBottomColor: "#000000", alignItems: "center", justifyContent: "center"}}>
        <Button title="< back" style={{background: "rgba(0, 0, 0, 0)", position: "absolute", left: 0, width: "30%"}}/>
        <Text style={{fontSize: 32}}>
          {state.name}
        </Text>
      </View>
      <GraphDisplay graph={state.graph} />
      <Text>
        pretend there is more data here
      </Text>
    </View>
  );
}