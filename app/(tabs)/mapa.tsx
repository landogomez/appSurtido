import { View } from "react-native";
import MapView from 'react-native-maps';
import NavBar from "../navBar";

const INITIAL_REGION = {
    latitude: 19.4326,
    longitude: -99.1332,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}


const Mapa = () => {
    return (
        <View className="flex-1">
            <MapView initialRegion={INITIAL_REGION} style={{ flex: 1 }} showsUserLocation/>
            <NavBar />
        </View>
    )
}

export default Mapa;