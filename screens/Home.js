import { StyleSheet, Text, View, Button, Appearance, useColorScheme, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import DataWindow from '../components/DataWindow';
import DatapointFrame from '../components/DatapointFrame';
import Carousel from '../components/Carousel';
import { getTestData, getData } from '../modules/GetData';

export default function Home() {
  const insets = useSafeAreaInsets();
  const realGDP = getTestData();

  const [dataVisible, setVisibility] = React.useState(false)
  const [dataState, setDataState] = React.useState(realGDP)
  const windowHandler = (data) => {
    setDataState(data);
    setVisibility(true);
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "flex-start"}}>
    {/* <View style={{flex: 1, alignItems: "center", justifyContent: "center", marginTop: insets.top}}> */}
      <Text style={{top: 10, left: 10, alignSelf: "flex-start", fontSize: 24, fontWeight: "bold", marginBottom: 20}}>
        Welcome back, Om Abhijit Talathi
      </Text>
      <Carousel title="Investments">
        <DatapointFrame data={realGDP} openWindow={windowHandler}/>
        <DatapointFrame data={realGDP} openWindow={windowHandler}/>
      </Carousel>
      <Carousel title="General Economy">
        <DatapointFrame data={realGDP} openWindow={windowHandler}/>
        <DatapointFrame data={realGDP} openWindow={windowHandler}/>
      </Carousel>
      <DataWindow visible={dataVisible} toggle={setVisibility} openWindow={windowHandler} state={dataState}/>
    </SafeAreaView>
  );
}