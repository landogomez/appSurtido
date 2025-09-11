import { TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";



const SearchBar = () => {
    return (
        <View className='flex-row items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 w-11/12'>
            <MagnifyingGlassIcon size={16} color={"#6B7280"}/>
            <TextInput placeholder='Buscar...' placeholderTextColor={"#9CA3AF"} className='flex-1 ml-2' />
        </View>
    )
}
export default SearchBar;