import { StyleSheet, Text, View, Button, ScrollView, useColorScheme, TextInput, Switch, SafeAreaView } from 'react-native';
import React from 'react';
import { useSettings, getDefaultSettings } from '../modules/UseSettings';

export default function Settings() {
  let [curSettings, setSettings] = useSettings();
  // React.useState([
  //   ["Override Device Color Theme", false],
  //   ["Override Dark Mode", true, (settings) => {return settings[1][2]}],
  //   ["Override Name", "DEFAULT"],
  // ]);

  let children = curSettings.map(([text, value, dependency], index) => {
    //TODO: use value[3] function to check whether this will be enabled
    console.log(value)
    return (
      <SafeAreaView style={styles.settingRow} key={index}>
        <Text style={styles.rowText}>
          {text}
        </Text>
        {value === true || value === false ? (
          <Switch
            disabled={dependency ? dependency(curSettings) : false}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(newValue) => {
              console.log(`Switch: ${newValue}`)
              curSettings[index][1] = newValue;//!value[1];
              setSettings(curSettings);
            }}
            value={value}
          />
        ) : (
          <TextInput
            onChangeText={(newText) => {
              console.log(`Text: ${newText}`)
              curSettings[index][1] = newText;
              setSettings(curSettings);
            }}
            value={value}
            placeholder="NO VALUE"
            // keyboardType='default'
          />
        )}
      </SafeAreaView>
    );
  })
  
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.settingsContainer}>
      <View style={styles.settingRow}>
        <Text style={styles.rowText}>
          SETTINGS
        </Text>
        <Button title="RESET SETTINGS" onPress={() => {setSettings(getDefaultSettings())}} />
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  settingRow: {
    width: "100%", height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  settingsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rowText: {
    fontSize: 16,
  },
});