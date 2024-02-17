import { StyleSheet, Text, View, Button, Appearance, useColorScheme, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Carousel({title, children}) {
    return (
      <View style={{width: "100%", marginBottom: "10%", height: "30%"}}>
        <Text style={{
          marginLeft: "5%",
          height: "10%"
        }}>
          {title}
        </Text>
        <ScrollView horizontal={true} style={{
          height: "90%",
        }}>
          {children}
        </ScrollView>
      </View>
    );
}