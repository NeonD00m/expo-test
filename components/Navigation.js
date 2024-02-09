import { View } from "react-native";

const barStyle = {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignSelf:"center",
}

export default function NavigationBar() {

    return (
        <View style={barStyle}>
            <Text>
                🐈
            </Text>
            <Text>
                ✅
            </Text>
            <Text>
                🏠
            </Text>
        </View>
    )
}