import { Text, TouchableOpacity, View } from "react-native";
import { CheckIcon, XMarkIcon } from "react-native-heroicons/solid";
import NavBar from "../navBar";

const Index = () => {
    return (
        <View className="flex-1 bg-white">
            <View className="px-6 pt-8 items-center justify-center mt-20">
                <Text className="text-2xl text-gray-500 text-center">Ángel</Text>
                <Text className="text-4xl  text-['#1D3557'] text-center">¿Listo para surtir hoy?</Text>
            </View>
            <View className="w-96 h-72 self-center mt-8 flex flex-wrap">
                {[...Array(4)].map((_, i) => (
                    <View
                        key={i}
                            className="w-1/2 h-1/2 p-2"
                    >
                        <View className="flex-1 bg-[#031445ff] rounded-xl shadow-sm items-center justify-center">
                            <Text className="text-lg font-bold text-white">KPI {i + 1}</Text>
                            <Text className="text-2xl text-blue-400 mt-1">{Math.floor(Math.random() * 100)}</Text>
                            <Text className="text-xs text-gray-500 mt-1">Descripción</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View className="relative h-68 flex flex-col px-6 pt-8 items-center justify-center mt-0">
                <View className="w-96 flex-row justify-between mb-4">
                    <Text className="font-bold text-gray-600">Tickets recientes</Text>
                    <Text className="font-bold ">Hoy</Text>
                </View>
                <View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <View className="absolute -top-2 -right-2 bg-blue-500 rounded-full w-5 h-5 items-center justify-center">
                            <CheckIcon size={12} color="#fff" />
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="font-bold">La Moderna</Text>
                            <Text className="font-bold">$2,000</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-500">Hoy a las 10:00 AM</Text>
                            <Text className="text-gray-500">250 Productos</Text>
                        </View>
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                            <XMarkIcon size={12} color="#fff" />
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="font-bold">La Moderna</Text>
                            <Text className="font-bold">$2,000</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-500">Hoy a las 10:00 AM</Text>
                            <Text className="text-gray-500">250 Productos</Text>
                        </View>
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <View className="absolute -top-2 -right-2 bg-blue-500 rounded-full w-5 h-5 items-center justify-center">
                            <CheckIcon size={12} color="#fff" />
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="font-bold">La Moderna</Text>
                            <Text className="font-bold">$2,000</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-500">Hoy a las 10:00 AM</Text>
                            <Text className="text-gray-500">250 Productos</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity className="absolute bottom-1 left-0 right-0 items-center" onPress={()=>{}}>
                    <Text className="font-bold text-blue-500">Ver todos</Text>
                </TouchableOpacity>
            </View>
            <NavBar />
        </View>
    )
}

export default Index;