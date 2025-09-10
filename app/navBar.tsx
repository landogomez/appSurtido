import { BlurView } from 'expo-blur';
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Keyboard, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { BuildingStorefrontIcon, ClipboardDocumentListIcon, ExclamationTriangleIcon, FaceFrownIcon, HomeIcon, InboxArrowDownIcon, MagnifyingGlassIcon, MapPinIcon, TruckIcon } from "react-native-heroicons/outline";
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
    const [showModalCentral, setShowModalCentral] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const tiendas = [
        { id: '1', name: 'Tienda A' },
        { id: '2', name: 'Tienda B' },
        { id: '3', name: 'Tienda C' },
    ]
    const [selectedStore, setSelectedStore] = useState<string | null>(null);

    const tiendasRuta = [
        { id: '11', name: 'Tienda X' },
        { id: '21', name: 'Tienda Y' },
        { id: '30', name: 'Tienda Z' },
        { id: '4', name: 'Tienda W' },
        { id: '5', name: 'Tienda V' },
        { id: '6', name: 'Tienda U' },
        { id: '7', name: 'Tienda T' },
        { id: '8', name: 'Tienda S' },
        { id: '9', name: 'Tienda R' },
        { id: '10', name: 'Tienda Q' },
    ]

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
                onPress={() => { setShowModalCentral(!showModalCentral) }}
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
        {showModalCentral && (
            <Modal presentationStyle='pageSheet' animationType='slide'>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View className='flex-1 items-center'>
                        <View className='flex-row justify-between px-6 py-4 w-full mt-8 items-center'>
                            <TouchableOpacity onPress={() => setShowModalCentral(false)}>
                                <Text className='font-medium text-blue-500'>Cancelar</Text>
                            </TouchableOpacity>
                            <Text className='font-bold text-md'>Seleccionar Tienda</Text>
                            <TouchableOpacity>
                                <Text className='font-medium text-blue-500'>Agregar</Text>
                            </TouchableOpacity>
                        </View>
                        <View className='flex-row items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 w-11/12'>
                            <MagnifyingGlassIcon size={16} color={"#6B7280"}/>
                            <TextInput placeholder='Buscar...' placeholderTextColor={"#9CA3AF"} className='flex-1 ml-2' />
                        </View>
                        <View className='mt-10 w-11/12'>
                            <Text className='font-bold text-gray-600 mb-4'>Cercanos</Text>
                            <FlatList data={tiendas} renderItem={({ item }) => (
                                <TouchableOpacity key={item.id} className="flex-row items-center  p-4 border-b border-gray-200 w-full" onPress={() => setSelectedStore(item.id)}>
                                    <BuildingStorefrontIcon size={24} />
                                    <Text className='ml-2 text-lg'>{item.name}</Text>
                                    <View className={`ml-auto border border-gray-300 rounded-full w-6 h-6 ${selectedStore === item.id ? 'bg-[#031445ff]' : ''}`} >
                                    </View>
                                </TouchableOpacity>
                            )}>
                            </FlatList>
                        </View>
                        <View className='mt-10 w-11/12 flex-1'>
                            <Text className="font-bold text-gray-600 mb-4">Establecimientos de la ruta</Text>
                            <FlatList  data={tiendasRuta} renderItem={({item}) => (
                                <TouchableOpacity key={item.id} className='flex-row items-center  p-4 border-b border-gray-200 w-full' onPress={() => setSelectedStore(item.id)}>
                                    <BuildingStorefrontIcon size={24} />
                                    <Text className='ml-2 text-lg'>{item.name}</Text>
                                    <View className={`ml-auto border border-gray-300 rounded-full w-6 h-6 ${selectedStore === item.id ? 'bg-[#031445ff]' : ''}`} >
                                    </View>
                                </TouchableOpacity>
                            )}>
                            </FlatList>
                            {selectedStore && (
                                <View className='flex-row items-center justify-between bg-[#031445ff] p-4 mb-10 rounded-lg'>
                                    <Text className='text-lg text-gray-200'>{tiendasRuta.find(item => item.id === selectedStore)?.name}</Text>
                                    <TouchableOpacity>
                                        <Text className='text-white font-bold'>Seleccionar</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )}
    </>
       
  );
};

export default NavBar;