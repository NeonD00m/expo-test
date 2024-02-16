//shows a mini tab that can be inside a carousel or in a scrolling list
// shows:
//  -  a small label at the top for the name of the stock
//  -  EITHER: a small view of the graph OR a logo or image to represent
//  -  maybe another label for government, stock, investors, or other "tags"\

import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import GraphDisplay from './GraphDisplay'
import React from 'react';

export default function DatapointFrame({name, graphData}) {
    return (
        <View style={{borderRadius: 20, aspectRatio: 1.5}}>
            <Text title={name} style={{width: "100%", position: "absolute", top: 0, fontSize: 16}} />
            <GraphDisplay graph={graphData} />
            <View style={{flex: 1, width: "100%"}}>
                {/* put tags? */}
            </View>
        </View>
    );
}