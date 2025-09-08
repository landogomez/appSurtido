import { Text, View } from 'react-native';
import { CheckIcon, XMarkIcon } from "react-native-heroicons/solid";

type TicketCardProps = {
    tienda: string;
    monto: number;
    hora: string;
    productos: number;
    estado: 'completado' | 'cancelado';
}


const TicketCard = ({ tienda, monto, hora, productos, estado }: TicketCardProps) => {
    return (
        <>
            <View className={`absolute -top-2 -right-2  ${estado == 'completado' ? 'bg-blue-500' : 'bg-red-500'} rounded-full w-5 h-5 items-center justify-center`}>
                {estado === 'completado' ? <CheckIcon size={12} color="#fff" /> : <XMarkIcon size={12} color="#fff" />}
            </View>
            <View className="flex-row justify-between">
                <Text className="font-bold">{tienda}</Text>
                <Text className="font-bold">${monto}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-500">{hora}</Text>
                <Text className="text-gray-500">{productos} Productos</Text>
            </View>
        </>
        
    )
}
export default TicketCard