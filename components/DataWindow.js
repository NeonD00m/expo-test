//for when the user clicks on a DatapointFrame
import { StyleSheet, Text, View, Button, Modal, useColorScheme, ScrollView, Dimensions } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import GraphDisplay from './GraphDisplay';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import Carousel from './Carousel';
import DatapointFrame from './DatapointFrame';
import { getData } from '../modules/GetData';

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

export default function DataWindow({visible, toggle, state, openWindow}) {
  const colorScheme = useColorScheme();
  const isLightTheme = colorScheme === 'light';
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const [favorited, setFavorited] = React.useState(false);
  let similarFrames = (state && state.similar ? state.similar : []).map((statisticId, index) => {
    return (
      <DatapointFrame key={index} data={getData(statisticId)} openWindow={openWindow}/>
    );
  });
  return (
    <Modal 
      animationType="slide"
      visible={visible}
      onRequestClose={()=>{toggle(false)}}
      statusBarTranslucent={false}
      // transparent={true}
      style={{
        background: isLightTheme ? '#d0d0c0' : '#242c40',
      }}
    >
      <SafeAreaView style={{
        flex: 1,
        background: isLightTheme ? '#d0d0c0' : '#242c40',
      }}>
        <View style={styles.header}>
          <Button title="< back" style={styles.backButton} onPress={()=>{toggle(false)}}/>
          <Text style={styles.title}>{state.name}</Text>
          <Button style={styles.favButton} title="" onPress={()=>{
            console.log(`${favorited ? "un" : ""}favorited ${state.name}`);
            setFavorited(!favorited);
          }}>
            <Entypo name={iconImage[favorited.toString()]} size={24} color={iconColor[favorited.toString()]} />
          </Button>
        </View>
        <ScrollView style={styles.scrollView}
          contentContainerStyle={styles.scrollContainer}
        >
          <GraphDisplay style={styles.graph} graph={state.graph}
            height={250} width={Dimensions.get("window").width}
          />
          <Text style={styles.section}>
            maybe let the user expand the time frame of the graph?
          </Text>
          <Text style={styles.statistic}>
            pretend there is more data here
          </Text>
          <Carousel title="Similar Statistics">
            {similarFrames.length > 0 ? similarFrames : (
              <Text>
                No Similar Statistics Available
              </Text>
            )}
          </Carousel>
          <Text style={styles.section}>
            something useful goes here
          </Text>
          <Text style={styles.statistic}>
            (data)
          </Text>
          <Text style={styles.section}>
            what does this statistic show or predict?
          </Text>
          <Text style={styles.statistic}>
            (data)
          </Text>
          <Text style={styles.statistic}>
            (data)
          </Text>
          <Text style={styles.statistic}>
            info about where we got the statistic from? (like api)
          </Text>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  graph: {
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 16,
  },
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
    fontSize: 16,
    marginBottom: 10,
  },
  statistic: {
    marginBottom: 20,
    fontSize: 14,
  },
  header: {
    flex: 0,
    alignItems: "center",
    // justifyContent: "flex-start",
    width: "100%",
    borderBottomWidth: 2, borderBottomColor: "#808080",
      // alignItems: "center",
      justifyContent: "space-between",
      // alignContent: "center",
    flexDirection: "row",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    // borderColor: "#000000",
    // borderWidth: 10,
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
})