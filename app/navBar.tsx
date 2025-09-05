import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ClipboardDocumentListIcon, ExclamationTriangleIcon, HomeIcon, InboxArrowDownIcon, MapPinIcon } from "react-native-heroicons/outline";
import { ClipboardDocumentListIcon as ClipboardFilled, HomeIcon as HomeIconFilled, MapPinIcon as MapFilled } from "react-native-heroicons/solid";

const NavBar = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('/')

    const handlePress = (route: string) => {
        setActiveTab(route);
        router.replace(`/(tabs)/${route}`);
    };
    const pathname = usePathname();

  return (
        <View
            className="h-16 bg-white border border-gray-300 flex-row justify-around items-center"
            style={{
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 30,
                borderRadius: 32,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.15,
                shadowRadius: 16,
                elevation: 8,
                backgroundColor: 'white',
            }}
        >
            <TouchableOpacity onPress={() => handlePress('/')}>
                {pathname == '/' ? <HomeIconFilled color={'#031445ff'}/> : <HomeIcon color={'#B1B1B1'}/>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('ventas')}>
                {pathname == '/ventas' ? <ClipboardFilled color={'#031445ff'}/> : <ClipboardDocumentListIcon color={'#B1B1B1'}/>}
            </TouchableOpacity>
                
            {/* FAB central - solo placeholder visual */}
            <TouchableOpacity
                onPress={() => {}}
                style={{
                    bottom: 30, // Eleva el FAB por encima de la barra de navegación
                    width: 72,
                    height: 72,
                    borderRadius: 40,
                    backgroundColor: '#031445ff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 16 },
                    shadowOpacity: 0.2,
                    shadowRadius: 12,
                    elevation: 8,
                }}
            >
                {/* Aquí puedes poner el icono que prefieras para el FAB */}
                <InboxArrowDownIcon color="white" style={{ alignSelf: 'center' }} size={32}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <ExclamationTriangleIcon color={'#B1B1B1'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('mapa')}>
                {pathname == '/mapa' ? <MapFilled color={'#031445ff'}/> : <MapPinIcon color={'#B1B1B1'}/>}
            </TouchableOpacity>
        </View>
  );
};

export default NavBar;