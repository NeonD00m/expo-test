import { StyleSheet, Text, View, Button, Appearance, useColorScheme, TextInput } from 'react-native';
import React from 'react';

export default function Settings() {
  const [text, setText] = React.useState('');
  function onChangeText(newText) {
    console.log(newText);
    setText(newText);
  }
  
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>
          idk what kinda settings would even be here
      </Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="type a message"
      />
    </View>
  );
}