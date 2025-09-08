import { BlurView } from 'expo-blur';
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ClipboardDocumentListIcon, ExclamationTriangleIcon, FaceFrownIcon, HomeIcon, InboxArrowDownIcon, MapPinIcon, TruckIcon } from "react-native-heroicons/outline";
import { ClipboardDocumentListIcon as ClipboardFilled, HomeIcon as HomeIconFilled, MapPinIcon as MapFilled } from "react-native-heroicons/solid";

const NavBar = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('/')

    const handlePress = (route: string) => {
        setActiveTab(route);
        router.replace(`/(tabs)/${route}`);
    };
    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    }

  return (
    <>
        <View
            className="h-16 bg-white border border-gray-300 flex-row justify-around items-center"
            style={{
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 70,
                borderRadius: 32,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.15,
                shadowRadius: 16,
                elevation: 8,
                backgroundColor: 'white',
            }}
        >
            <TouchableOpacity onPress={() => handlePress('/')}>
                {pathname == '/' ? <HomeIconFilled color={'#031445ff'}/> : <HomeIcon color={'#B1B1B1'}/>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('ventas')}>
                {pathname == '/ventas' ? <ClipboardFilled color={'#031445ff'}/> : <ClipboardDocumentListIcon color={'#B1B1B1'}/>}
            </TouchableOpacity>
                
            {/* FAB central - solo placeholder visual */}
            <TouchableOpacity
                onPress={() => {}}
                style={{
                    bottom: 30, // Eleva el FAB por encima de la barra de navegación
                    width: 72,
                    height: 72,
                    borderRadius: 40,
                    backgroundColor: '#031445ff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 16 },
                    shadowOpacity: 0.2,
                    shadowRadius: 12,
                    elevation: 8,
                }}
            >
                
                <InboxArrowDownIcon color="white" style={{ alignSelf: 'center' }} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
                <ExclamationTriangleIcon color={'#B1B1B1'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('mapa')}>
                {pathname == '/mapa' ? <MapFilled color={'#031445ff'}/> : <MapPinIcon color={'#B1B1B1'}/>}
            </TouchableOpacity>
        </View>
        {showModal && (
            <TouchableWithoutFeedback onPress={toggleModal}>
                <BlurView intensity={30} tint="dark" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <View className="absolute bottom-40 left-1/2 -translate-x-1/2 w-80 bg-black/70 rounded-lg shadow-lg  space-y-4">
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-gray-200 p-3">
                            <Text className="font-medium text-red-500">Reportar Robo</Text>
                            <ExclamationTriangleIcon color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-gray-200 p-3">
                            <Text className="font-medium text-gray-300">Accidente Tránsito</Text>
                            <TruckIcon color={"#d1d5db"} />
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-row items-center justify-between  border-gray-200 p-3">
                            <Text className="font-medium text-gray-300">Emergencia Médica</Text>
                            <FaceFrownIcon color={"#d1d5db"} />
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </TouchableWithoutFeedback>
            
        )}
    </>
       
  );
};

export default NavBar;