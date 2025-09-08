import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import KpiCard from "../components/KpiCard";
import OfflineBadge from "../components/OfflineBadge";
import TicketCard from "../components/TicketCard";
import NavBar from "../navBar";

const Index = () => {

    const [isOffline, setIsOffline] = useState(false)

    
    return (
       
        <View className="flex-1 bg-white">
            <View className="px-6 pt-8 items-center justify-center mt-20">
                <Text className="text-2xl text-gray-500 text-center">Ángel</Text>
                <Text className="text-4xl  text-['#1D3557'] text-center">¿Listo para surtir hoy?</Text>
            </View>
            <View className="w-96 h-72 self-center mt-8 flex flex-wrap">
                <KpiCard titulo="Establecimientos" valor={24} descripcion="Tiendas hoy" />
                <KpiCard titulo="Stock" valor={560} descripcion="Productos surtidos hoy" />
                <KpiCard titulo="% Ruta" valor={75} descripcion="Porcentaje de ruta" />
                <KpiCard titulo="Ingresos" valor={12000} descripcion="Ingresos generados hoy" />
            </View>
            <View className="relative h-68 flex flex-col px-6 pt-8 items-center justify-center mt-0">
                <View className="w-96 flex-row justify-between mb-4">
                    <Text className="font-bold text-gray-600">Tickets recientes</Text>
                    <Text className="font-bold ">Hoy</Text>
                </View>
                <View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="completado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="Abarrotes Paisa" monto={1500} hora="Hoy a las 10:15 AM" productos={1200} estado="cancelado" />
                    </View>
                    <View className="h-16 w-96 rounded-lg border border-gray-200 mb-2 p-4 justify-center">
                        <TicketCard tienda="La Moderna" monto={2000} hora="Hoy a las 10:00 AM" productos={250} estado="completado" />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text className="font-bold text-blue-500">Ver todos</Text>
                </TouchableOpacity>
                
            </View>
            <NavBar />
            {isOffline && <OfflineBadge />}
        </View>
    )
}

export default Index;