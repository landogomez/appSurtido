import { Text, TouchableOpacity, View } from 'react-native';

type SelectableListItemProps = {
    name: string;
    selected: boolean;
    onPress: () => void;
    icon?: React.ReactNode;
}

const SelectableListItem = ({ name, selected, onPress, icon }: SelectableListItemProps) => {
    return (
        <TouchableOpacity  className="flex-row items-center  p-4 border-b border-gray-200 w-full" onPress={onPress}>
            {icon}
            <Text className='ml-2 text-lg'>{name}</Text>
            <View className={`ml-auto border border-gray-300 rounded-full w-6 h-6 ${selected ? 'bg-[#031445ff]' : ''}`} >
            </View>
        </TouchableOpacity>  
    )
}
export default SelectableListItem;