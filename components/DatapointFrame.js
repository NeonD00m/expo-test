//shows a mini tab that can be inside a carousel or in a scrolling list
// shows:
//  -  a small label at the top for the name of the stock
//  -  EITHER: a small view of the graph OR a logo or image to represent
//  -  maybe another label for government, stock, investors, or other "tags"\

import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import GraphDisplay from './GraphDisplay'
import React from 'react';

export default function DatapointFrame({name, graphData, data, openWindow}) {
  const self = React.useRef()
  return (
    <View ref={self} style={styles.frame} onTouchEnd={(event) => {
        openWindow(name, graphData, data);
    }}>
      <GraphDisplay graph={graphData} parent={self}
        width={self.current && self.current.offsetWidth ? self.current.offsetWidth : null}
        height={self.current && self.current.offsetHeight ? self.current.offsetHeight : null}
      />
      <Text style={styles.title}>
        {name}
      </Text>
      <View style={{flex: 1, width: "100%"}}>
        {/* put tags? */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: "100%", height: 26,
    position: "absolute", top: 0,
    fontSize: 16,
    backgroundColor: "#ffffff", color: "#000000",
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    paddingLeft: 32,
  },
  frame: {
    backgroundColor: "#ffffff", 
    borderRadius: 20, marginRight: 20,
    aspectRatio: 1.5, height: "100%"
  }
});