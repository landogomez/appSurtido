import { useState } from "react";
import { Text, View } from "react-native";
import TicketCard from "../components/TicketCard";
import NavBar from "../navBar";

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
            <View className="pt-4 items-center justify-center mt-20">
                <Text className="text-lg font-bold">Historial de ventas</Text>
            </View>
            <View className="h-16 self-center mt-6 flex flex-row items-center justify-center space-x-4"> 
                <View className={`items-center flex-row justify-center  p-2 m-2 border rounded-full ${isSelected('Todos') ? 'bg-[#031445ff]' : 'border-gray-300'}`} onTouchEnd={() => handleFilter('Todos')}>
                    <Text className={`${isSelected('Todos') ? 'text-white' : 'text-gray-300'} font-bold`}>Todos</Text>
                </View>
                <View className={`items-center flex-row justify-center rounded-full p-2 m-2 border ${isSelected('Enviados') ? 'bg-[#031445ff]' : 'border-gray-300'}`} onTouchEnd={() => handleFilter('Enviados')}>
                    <Text className={`${isSelected('Enviados') ? 'text-white' : 'text-gray-300'} font-bold`}>Enviados</Text>
                </View>
                <View className={`items-center flex-row justify-center rounded-full p-2 m-2 border ${isSelected('Pendientes') ? 'bg-[#031445ff]' : 'border-gray-300'}`} onTouchEnd={() => handleFilter('Pendientes')}>
                    <Text className={`${isSelected('Pendientes') ? 'text-white' : 'text-gray-300'} font-bold`}>Pendientes</Text>
                </View>
            </View>
            <View className="relative h-68 flex flex-col px-6 pt-8 items-center justify-center">
                <View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="completado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="cancelado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="completado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="cancelado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="completado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="completado" />
                    </View>
                </View>
            </View>
            <NavBar />
        </View>
    )
}

export default Ventas;

