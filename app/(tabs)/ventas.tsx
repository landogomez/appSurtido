import { useState } from "react";
import { Text, View } from "react-native";

const Ventas = () => {


    const [selectedFilter, setSelectedFilter] = useState('Todos')

    const handleFilter = (filter: string) => {
        setSelectedFilter(filter)
    }

    const isSelected = (filter: string) => {
        return selectedFilter === filter
    }

    return (
        <View className="flex-1 bg-white">
            <View className="px-6 pt-8 items-center justify-center mt-20">
                <Text className="text-lg font-bold">Historial de ventas</Text>
            </View>
            <View className="w-96 h-72 self-center mt-8 flex flex-row justify-around">
                <View className={`w-auto items-center flex-row justify-center rounded-full p-2 border ${isSelected('Todos') ? 'bg-blue-500' : 'border-gray-300'}`} onTouchEnd={() => handleFilter('Todos')}>
                    <Text className={`${isSelected('Todos') ? 'text-white' : 'text-gray-300'}`}>Todos</Text>
                </View>
                <View className={`w-auto items-center flex-row justify-center rounded-full p-2 border ${isSelected('Enviados') ? 'bg-blue-500' : 'border-gray-300'}`} onTouchEnd={() => handleFilter('Enviados')}>
                    <Text className={`${isSelected('Enviados') ? 'text-white' : 'text-gray-300'}`}>Enviados</Text>
                </View>
                <View className={`w-auto items-center flex-row justify-center rounded-full p-2 border ${isSelected('Pendientes') ? 'bg-blue-500' : 'border-gray-300'}`} onTouchEnd={() => handleFilter('Pendientes')}>
                    <Text className={`${isSelected('Pendientes') ? 'text-white' : 'text-gray-300'}`}>Pendientes</Text>
                </View>
            </View>
        </View>
    )
}

export default Ventas;

