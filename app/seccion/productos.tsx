import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { CameraIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { ExclamationTriangleIcon, PlusIcon } from "react-native-heroicons/solid";

const Productos = () => {
    return (
        <View className="flex-1 bg-white">
            <View className="flex-row items-center px-6 pt-8 mt-10">
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
            <Text className="ml-8 mt-10 text-lg font-bold">Ticket No.1</Text>
            <View className="flex-row items-center justify-center mt-10 space-x-4 border  border-gray-400 rounded-lg p-4 mx-6">
                <PlusIcon />
                <Text className="font-bold ml-4">Agregar Productos</Text>
            </View>
        </View>
    )
}

export default Productos;