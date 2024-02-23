//for when the user clicks on a DatapointFrame
import { StyleSheet, Text, View, Button, Modal, useColorScheme, ScrollView } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import GraphDisplay from './GraphDisplay';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import Carousel from './Carousel';
import DatapointFrame from './DatapointFrame';

const iconColor = {
  light: {
    true: "#fff200",
    false: "#808080",
  },
  dark: {
    true: "#fff200",
    false: "#808080",
  },
};

const iconImage = {
  true: "star",
  false: "star-outlined",
}

export default function DataWindow({visible, toggle, state}) {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const [favorited, setFavorited] = React.useState(false);
  return (
    <Modal 
      animationType="slide"
      visible={visible}
    >
      <SafeAreaView style={styles.background}>
        <View style={styles.header}>
          <Button title="< back" style={styles.backButton} onPress={()=>{toggle(!visible)}}/>
          <Text style={styles.title}>{state.name}</Text>
          <Button style={styles.favButton} title="" onPress={()=>{
            console.log(`${favorited ? "un" : ""}favorited ${state.name}`);
            setFavorited(!favorited);
          }}>
            <Entypo name={iconImage[favorited.toString()]} size={24} color={iconColor[favorited.toString()]} />
          </Button>
        </View>
        <GraphDisplay graph={state.graph} />
        <Text>
          pretend there is more data here
        </Text>
        {/* <Text style={styles.Section}>
          Similar Statistics
        </Text> */}
        <Carousel title="Similar Statistics">
          <DatapointFrame graphData={state.Data}/>
        </Carousel>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  favButton: {
    marginHorizontal: "5%",
    width: "20%",
  },
  backButton: {
    background: "rgba(0, 0, 0, 1)",
    position: "absolute", left: 0, width: "30%",
    alignItems: "center", justifyContent: "flex-start",
  },
  title: {
    // width: "100%",
    textAlign: "center",
    fontSize: 32,
  },
  section: {
    fontSize: 24,
  },
  header: {
    flex: 0,
    alignItems: "center",
    // justifyContent: "flex-start",
    width: "100%",
    borderBottomWidth: 2, borderBottomColor: "#d1d1d1",
      // alignItems: "center",
      justifyContent: "space-between",
      // alignContent: "center",
    flexDirection: "row"
  },
  background: {
    backgroundColor: "#ffffff",
  },
})