import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home, Data, Settings } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import TabBarIcon from './components/TabBarIcon';

const iconColor = {
  light: {
    true: "#ffffff",
    false: "#808080",
  },
  dark: {
    true: "#000000",
    false: "#808080",
  },
}

export default function App() {
  const colorScheme = useColorScheme();
  const isLightTheme = colorScheme === 'light';
  const Tab = createBottomTabNavigator();
  let screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: isLightTheme ? '#d0d0c0' : '#242c40',
    }
  }

  return ( //TODO: PUT INSIDE SAFE AREA VIEW
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="HOME" component={Home} options={{
          tabBarIcon: TabBarIcon("HOME", "home", iconColor[colorScheme])
        }} />
        <Tab.Screen name="DATA" component={Data} options={{
          tabBarIcon: TabBarIcon("DATA", "line-graph", iconColor[colorScheme])
        }} />
        <Tab.Screen name="SETTINGS" component={Settings} options={{
          tabBarIcon: TabBarIcon("SETTINGS", "cog", iconColor[colorScheme])
        }} />
        {/* <MaxScreen name="Data" component={Data} icon="line-graph" />
        <MaxScreen name="Settings" component={Settings} icon="cog" /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function OldApp() {
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
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={[styles.text, themeTextStyle]}>
            yo wassup I am hopefully not off the screen
          </Text>
          <Button title="idk press me or something" style={[styles.text, themeTextStyle]} onPress={(event) => {alert("click")}}>
          </Button>
        </View>
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