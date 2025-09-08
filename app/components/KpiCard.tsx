import { Text, View } from 'react-native';


type KpiCardProps = {
    titulo: string;
    valor: number;
    descripcion: string;
}

const KpiCard = ({ titulo, valor, descripcion }: KpiCardProps) => {
    return (
        <View
                className="w-1/2 h-1/2 p-2"
        >
            <View className="flex-1 bg-[#031445ff] rounded-xl shadow-sm items-center justify-center">
                <Text className="text-lg font-bold text-white">{titulo}</Text>
                <Text className="text-2xl text-blue-400 mt-1">{valor}</Text>
                <Text className="text-xs text-gray-500 mt-1">{descripcion}</Text>
            </View>
        </View>
    )
}

export default KpiCard