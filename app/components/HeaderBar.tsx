import { Text, TouchableOpacity, View } from 'react-native';

type HeaderBarProps = {
    onPress: () => void;
    botonIzq: string;
    botonDer?: string;
    titulo: string;
    onPressDer?: () => void;
}

const HeaderBar = ({ onPress, botonIzq, botonDer, titulo, onPressDer }: HeaderBarProps) => {
    return (
        <View className='flex-row justify-between px-6 py-4 w-full mt-8 mb-4 items-center'>
            <TouchableOpacity onPress={onPress}>
                <Text className='font-medium text-blue-500'>{botonIzq}</Text>
            </TouchableOpacity>
            <Text className='font-bold text-md'>{titulo}</Text>
            <TouchableOpacity onPress={onPressDer}>
                <Text className='font-medium text-blue-500'>{botonDer}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBar;