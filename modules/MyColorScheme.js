import { StyleSheet, Text, View, Button, Appearance, useColorScheme } from 'react-native';
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

const colorScheme = useColorScheme();
const isLightTheme = colorScheme === 'light';