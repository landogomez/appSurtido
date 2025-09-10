import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CameraIcon, ChevronLeftIcon, MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import { ExclamationTriangleIcon, PlusIcon } from "react-native-heroicons/solid";

const Productos = () => {
    const productos = [
        { id: '1', name: 'Producto A', price: 10, quantity: 0 },
        { id: '2', name: 'Producto B', price: 20, quantity: 0 },
        { id: '3', name: 'Producto C', price: 30, quantity: 0 },
        { id: '4', name: 'Producto D', price: 40, quantity: 0 },
        { id: '5', name: 'Producto E', price: 50, quantity: 0 },
        { id: '6', name: 'Producto F', price: 60, quantity: 0 },
        { id: '7', name: 'Producto G', price: 70, quantity: 0 },
        { id: '8', name: 'Producto H', price: 80, quantity: 0 },
        { id: '9', name: 'Producto I', price: 90, quantity: 0 },
        { id: '10', name: 'Producto J', price: 100, quantity: 0 },
    ]
    return (
        <View className="flex-1 bg-white">
            <View className="flex-row items-center px-6 pt-8 mt-10 mb-4">
                <View className="w-12 items-start">
                    <TouchableOpacity onPress={() => {router.back()}}>
                        <ChevronLeftIcon color={"#3B82F6"}/>
                    </TouchableOpacity>
                </View>
                <Text className="flex-1 text-lg font-bold text-center">La Moderna</Text>
                <View className="w-12 flex-row items-center justify-end">
                    <TouchableOpacity>
                        <ExclamationTriangleIcon />
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-8">
                        <CameraIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <Text className="ml-8 mt-10 text-md font-bold">Ticket No.1</Text>
            <TouchableOpacity className="flex-row items-center justify-center mt-4 space-x-4 border  border-gray-400 rounded-lg p-4 mx-6">
                <PlusIcon />
                <Text className="font-bold ml-4">Agregar Productos</Text>
            </TouchableOpacity>
            <Text className="m-6 font-bold text-gray-600">Productos seleccionados</Text>
            <View className="flex-1 mb-6">
                <FlatList data={productos} renderItem={({item}) => (
                    <View className="flex-row items-center justify-between px-6 py-4">
                        <View className="space-y-2">
                            <Text className="font-bold">{item.name}</Text>
                            <Text className="font-bold text-[#5DBA00]">${item.price}</Text>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end ">
                            <TouchableOpacity className="mr-4" onPress={() => {}}>
                                <MinusCircleIcon color={item.quantity >= 0 ? "#ed0a0aff" : "#D1D5DB"}/>
                            </TouchableOpacity>
                            <Text className="mr-4 font-bold">{item.quantity}</Text>
                            <TouchableOpacity className="mr-4" onPress={() => {}}>
                                <PlusCircleIcon size={24} color={"#3B82F6"}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}>
                </FlatList>
            </View>
        </View>
    )
}

export default Productos;