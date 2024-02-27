import { StyleSheet, Text, View, Button, Appearance, useColorScheme, TextInput } from 'react-native';
import React from 'react';

export default function Settings({curSettings, setSettings}) {
  // const[curSettings, setSettings] = React.useState({})
  const [text, setText] = React.useState('');
  function onChangeText(newText) {
    console.log(newText);
    setText(newText);
  }

  let children = curSettings.map((value, index) => {

    //TODO: use value[3] function to check whether this will be enabled

    return (
      <View style={styles.settingRow}>
        <Text style={styles.rowText}>
          {value[0]}
        </Text>
        {value === true || value === false ? (
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={value[1] ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              curSettings[index][1] = !value[1];
              setSettings(curSettings);
            }}
            value={value[1]}
          />
        ) : (
          <TextInput
            onChangeText={(newText) => {
              console.log(newText);
              curSettings[index][1] = newText;
              setSettings(curSettings);
            }}
            value={value[1]}
            placeholder={value[1]}
          />
        )}
      </View>
    );
  })
  
  return (
    <ScrollView style={styles.settingsContainer}>
      <Text>
          idk what kinda settings would even be here
      </Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="type a message"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  settingRow: {
    width: "100%",
  },
  settingsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rowText: {
    fontSize: 14,
  },
});