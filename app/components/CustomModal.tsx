import { Text, View } from 'react-native';

type CustomModalProps = {
    title1: string;
    title2: string;
    showSelectionBar: boolean;
    selectionBar?: React.ReactNode;
    children: React.ReactNode[]; // Esperamos varios hijos
}

export default function ModalLayout({
  title1,
  title2,
  showSelectionBar,
  selectionBar,
  children,
}: CustomModalProps) {
  return (
    <View className='flex-1 items-center'>
      {/* Los children pueden ser HeaderBar, SearchBar, listas, etc. */}
      {children[0]} {/* HeaderBar */}
      {children[1]} {/* SearchBar */}
      <View className='mt-10 w-11/12'>
        <Text className='font-bold text-gray-600 mb-4'>{title1}</Text>
        {children[2]} {/* FlatList 1 */}
      </View>
      <View className='mt-10 w-11/12 flex-1'>
        <Text className="font-bold text-gray-600 mb-4">{title2}</Text>
        {children[3]} {/* FlatList 2 */}
        {showSelectionBar && selectionBar}
      </View>
    </View>
  );
}