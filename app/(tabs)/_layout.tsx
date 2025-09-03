
import { Tabs } from "expo-router";
import { ClipboardDocumentCheckIcon, HomeIcon as HomeIconOutline, MapPinIcon as MapPinOutline } from "react-native-heroicons/outline";
import { ClipboardDocumentCheckIcon as ClipboardOutline, HomeIcon as HomeIconFilled, MapPinIcon as MapPinFilled } from "react-native-heroicons/solid";

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <HomeIconFilled />
                        ) : (
                            <HomeIconOutline />
                        )
                }}
            />
            <Tabs.Screen
                name="seguimiento"
                options={{
                    title: 'Seguimiento',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MapPinFilled />
                        ) : (
                            <MapPinOutline />
                        )
                }}
            />
            <Tabs.Screen
                name="ventas"
                options={{
                    title: 'Ventas',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <ClipboardDocumentCheckIcon />
                        ) : (
                            <ClipboardOutline />
                        )
                }}
            />
        </Tabs>
    )
}

export default _Layout