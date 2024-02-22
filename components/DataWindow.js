//for when the user clicks on a DatapointFrame
import { StyleSheet, Text, View, Button, Modal, useColorScheme, ScrollView } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import GraphDisplay from './GraphDisplay';
import React from 'react';

export default function DataWindow({visible, toggle, state}) {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  return (
    <Modal 
      animationType="slide"
      visible={visible}
    >
      <SafeAreaView style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.title}>{state.name}</Text>
          <Button title="< back" style={styles.backButton} onPress={()=>{toggle(!visible)}}/>
        </View>
        <GraphDisplay graph={state.graph} />
        <Text>
          pretend there is more data here
        </Text>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backButton: {
    background: "rgba(0, 0, 0, 1)",
    position: "absolute", left: 0, width: "30%"
  },
  title: {
    // width: "100%",
    textAlign: "center",
    fontSize: 32,
  },
  header: {
    width: "100%",
    borderBottomWidth: 2, borderBottomColor: "#d1d1d1",
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    flexDirection: "row"
  },
  background: {
    backgroundColor: "#ffffff",
  },
})