import { Text, View } from "react-native";
import { SignalSlashIcon } from "react-native-heroicons/outline";
const OfflineBadge = () => {
    return (
        <View className="absolute bottom-5 left-1/2 -translate-x-1/2  w-auto items-center flex-row justify-center space-x-2  bg-[#FFE678] px-2 py-1 rounded-full">
            <SignalSlashIcon color="#fb923c" size={20}/>
            <Text className="text-sm text-gray-600 font-bold text-orange-400 ml-3">Sin conexión</Text>
        </View>
    )
}
export default OfflineBadge;