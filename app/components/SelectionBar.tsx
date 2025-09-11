import { Text, TouchableOpacity, View } from 'react-native';

type SelectionBarProps = {
    texto: string;
    onPress: () => void;
}


const SelectionBar = ({ texto, onPress }: SelectionBarProps) => {
    return (
        <View className='flex-row items-center justify-between bg-[#031445ff] p-4 mb-10 rounded-lg'>
            <Text className='text-lg text-gray-200'>{texto}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text className='text-white font-bold'>Seleccionar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectionBar;