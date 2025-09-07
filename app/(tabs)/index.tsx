import { Text, View } from "react-native";
import NavBar from "../navBar";

const Index = () => {
    return (
        <View className="flex-1 bg-white">
            <View className="px-6 pt-8 items-center justify-center mt-20">
                <Text className="text-2xl text-gray-500 text-center">Ángel</Text>
                <Text className="text-4xl  text-['#1D3557'] text-center">¿Listo para surtir hoy?</Text>
            </View>
                <View className="w-96 h-72 self-center mt-10 flex flex-wrap">
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
            {/* ...aquí puedes agregar más contenido si lo necesitas... */}
            <NavBar />
        </View>
    )
}

export default Index;