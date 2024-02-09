import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './components/Navigation';

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
    <Text style={[styles.text, themeTextStyle]}>
      I want to be OFF THE SCREEN OR COVERED BY A CAMERA
    </Text>
      <SafeAreaView style={[styles.container, themeContainerStyle]}>
        <Text style={[styles.text, themeTextStyle]}>
          yo wassup I am hopefully not off the screen
        </Text>
        <Button title="idk press me or something" style={[styles.text, themeTextStyle]}>
        </Button>
        {/* <View style={{justifyContent: "center", alignContent: "center"}}>
          
        </View>
        <Text>cdyjgvk!</Text>
        <StatusBar style="auto" /> */}
        {/* <Navigation /> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});