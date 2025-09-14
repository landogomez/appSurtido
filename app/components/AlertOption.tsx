import { Text, TouchableOpacity } from "react-native"

type Props = {
    onPress: () => void
    texto: string
    fontColor?: string
    icon?: React.ReactNode
    showBorder?: boolean
}

const AlertOption = ({ onPress, texto, icon, fontColor, showBorder }: Props) => {
    return (
        <TouchableOpacity className={`flex-row items-center justify-between p-3 ${showBorder ? 'border-b border-gray-200' : ''}`} onPress={onPress}>
            <Text className={`font-medium ${fontColor || 'text-red-500'}`}>{texto}</Text>
            {icon}
        </TouchableOpacity>
    )
}

export default AlertOption;