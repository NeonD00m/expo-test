import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Home() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: insets.top}}>
            <Text style={{top: 10, left: 10, fontSize: 24, position: "absolute", fontWeight: "bold"}}>
                Welcome back, Om Abhijit Talathi
            </Text>
            <View style={{width: "100%", marginBottom: "10%"}}>
                <Text>
                    Statistics: Economic State
                </Text>
                <Text>
                    (insert carousel for random stats on the economy)
                </Text>
            </View>
            <View style={{width: "100%", marginBottom: "10%"}}>
                <Text>
                    Statistics: Investments
                </Text>
                <Text>
                    (insert carousel for stock market, housing prices, bonds)
                </Text>
            </View>
        </View>
    )
}