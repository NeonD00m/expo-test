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
    <SafeAreaView style={styles.container}>
      <DataWindow visible={dataVisible} toggle={setVisibility} openWindow={windowHandler} state={dataState}/>
      <ScrollView style={styles.scrollView} horizontal={false} contentContainerStyle={styles.container}>
        <Text style={styles.welcomeText}>
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
        <Carousel title="Bueinsses">
          <DatapointFrame data={realGDP} openWindow={windowHandler}/>
          <DatapointFrame data={realGDP} openWindow={windowHandler}/>
        </Carousel>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    top: 10, left: 10,
    alignSelf: "flex-start",
    fontSize: 24, fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
})