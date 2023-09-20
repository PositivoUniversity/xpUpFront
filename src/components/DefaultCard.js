import { View } from "react-native"

export default function DefaultCard({styleCard, children}) {
    return (
        <View style={styleCard}>
            {children}
        </View>
    )
}
