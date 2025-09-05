
import { Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { ClipboardDocumentCheckIcon as ClipboardOutline, DocumentPlusIcon, HomeIcon as HomeIconOutline, MapPinIcon as MapPinOutline } from "react-native-heroicons/outline";
import { ClipboardDocumentCheckIcon as ClipboardFilled, HomeIcon as HomeIconFilled, MapPinIcon as MapPinFilled } from "react-native-heroicons/solid";

const _Layout = () => {
    return (
        <>
            <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarIconStyle: {
                    marginTop: 20 // mueve el icono hacia abajo
                },
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10
                },
                tabBarStyle : {
                    borderRadius: 50,
                    marginHorizontal:30,
                    marginBottom:50,
                    height:70,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderColor: '#E1E1E1',
                    borderWidth: 2,
                    borderTopWidth: 2
                }
            }}

        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <HomeIconFilled />
                        ) : (
                            <HomeIconOutline color={'#B1B1B1'}/>
                        )
                }}
            />
            <Tabs.Screen 
                name="nuevoTicket"
                options={{
                    title: 'Nuevo Ticket',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <DocumentPlusIcon color={color || '#B1B1B1'} />,
                }}
            />
            <Tabs.Screen
                name="spacer"
                options={{
                tabBarButton: () => null, // no muestra nada
                tabBarItemStyle: { flex: 1.5 }, // <-- aquí el truco
                }}
            />
            <Tabs.Screen 
                name="nuevo"
                options={{
                    title: 'Nuevo Ticket',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <DocumentPlusIcon color={color || '#B1B1B1'} />,
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
                            <MapPinOutline color={'#B1B1B1'}/>
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
                            <ClipboardFilled />
                        ) : (
                            <ClipboardOutline color={'#B1B1B1'}/>
                        )
                }}
            />
        </Tabs>

        <View
            style={{
                position: 'absolute',
                bottom: 90,
                left:0,
                right: 0,
                alignItems: 'center',
                zIndex: 10,
            }}
            pointerEvents="none"
        >
            <TouchableOpacity
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#060F28',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 12 },
                    shadowOpacity: 0.5,
                    shadowRadius: 16,
                    elevation: 8,
                }}
                onPress={() => {
                    // A
                }}
            >
                <DocumentPlusIcon color="white" style={{ alignSelf: 'center', marginTop: 20 }} size={32}/>
            </TouchableOpacity>
        </View>
    </>
        
        
    )
}

export default _Layout