import { Text, View, Button, Appearance, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function TabBarIcon(text, icon, colorMap) {
  return ({focused}) => {
    return (
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Entypo name={icon} size={24} color={colorMap[focused.toString()]} />
        <Text style={{fontSize: 12, color: colorMap[focused.toString()]}}>
            {text}
        </Text>
      </View>
    );
  };
}