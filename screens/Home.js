import { StyleSheet, Text, View, Button, Appearance, useColorScheme, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import DatapointFrame from '../components/DatapointFrame';

export default function Home() {
  const insets = useSafeAreaInsets();
  const smp500 = {
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
    {/* <View style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: insets.top}}> */}
      <Text style={{top: 10, left: 10, alignSelf: "flex-start", fontSize: 24, fontWeight: "bold", marginBottom: 20}}>
        Welcome back, Om Abhijit Talathi
      </Text>
      <View style={{width: "100%", marginBottom: "10%", height: "40%"}}>
        <Text style={{
          marginLeft: "5%",
          height: "10%"
          
        }}>
          Investments
        </Text>
        <ScrollView horizontal={true} style={{
          height: "90%",
        }}>
          <DatapointFrame name="SMP 500" graphData={smp500}/>
          <Text>
            (insert carousel for stock market and bonds or something?)
          </Text>
        </ScrollView>
      </View>
      <View style={{width: "100%", marginBottom: "10%"}}>
        <Text>
          Economic State
        </Text>
        <Text>
            (insert carousel for random stats on the economy)
        </Text>
      </View>
    </SafeAreaView>
  );
}