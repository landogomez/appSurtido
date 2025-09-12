import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Keyboard, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ArrowPathIcon, CameraIcon, ChevronLeftIcon, MinusCircleIcon, PlusCircleIcon, ShoppingBagIcon, TrashIcon } from "react-native-heroicons/outline";
import { ExclamationTriangleIcon, PlusIcon } from "react-native-heroicons/solid";
import HeaderBar from "../components/HeaderBar";
import SearchBar from "../components/SearchBar";
import SelectableListItem from "../components/SelectableListItem";
import SelectionBar from "../components/SelectionBar";

const Productos = () => {
    const productos = [
        { id: '1', name: 'Producto A', price: 10, quantity: 0 },
        { id: '2', name: 'Producto B', price: 20, quantity: 0 },
        { id: '3', name: 'Producto C', price: 30, quantity: 0 },
        { id: '4', name: 'Producto D', price: 40, quantity: 0 },
        { id: '5', name: 'Producto E', price: 50, quantity: 0 },
        { id: '6', name: 'Producto F', price: 60, quantity: 0 },
        { id: '7', name: 'Producto G', price: 70, quantity: 0 },
        { id: '8', name: 'Producto H', price: 80, quantity: 0 },
        { id: '9', name: 'Producto I', price: 90, quantity: 0 },
        { id: '10', name: 'Producto J', price: 100, quantity: 0 },
    ]

    const productosRuta = [
        { id: '11', name: 'Producto K', price: 110, quantity: 0 },
        { id: '21', name: 'Producto L', price: 120, quantity: 0 },
        { id: '30', name: 'Producto M', price: 130, quantity: 0 },
        { id: '40', name: 'Producto N', price: 140, quantity: 0 },
        { id: '58', name: 'Producto O', price: 150, quantity: 0 },
        { id: '62', name: 'Producto P', price: 160, quantity: 0 },
        { id: '70', name: 'Producto Q', price: 170, quantity: 0 },
        { id: '80', name: 'Producto R', price: 180, quantity: 0 },
        { id: '91', name: 'Producto S', price: 190, quantity: 0 },
        { id: '100', name: 'Producto T', price: 200, quantity: 0 },
    ]

    const productosMasVendidos = [
        { id: '101', name: 'Producto U', price: 210, quantity: 0 },
        { id: '102', name: 'Producto V', price: 220, quantity: 0 },
        { id: '103', name: 'Producto W', price: 230, quantity: 0 },
    ]

    const agregarProductos = (productosSeleccionados: string[]) => {

        const allProducts = [...productosMasVendidos, ...productosRuta];

        const nuevosProductos = allProducts.filter(producto => productosSeleccionados.includes(producto.id) && !productosCantidad.some(p => p.id === producto.id));

        setProductosCantidad(prevState => [...prevState, ...nuevosProductos]);

        setSelectedProducts([]);
        setShowModal(false);
    }


    
    const [productosCantidad, setProductosCantidad] = useState(productos)
    const [showModal, setShowModal] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

    const aumentarCantidad = (id: string) => {
        setProductosCantidad(prevState =>
            prevState.map(producto =>
                producto.id === id
                    ? { ...producto, quantity: producto.quantity + 1 }
                    : producto
            )
        );
    }

    const disminuirCantidad = (id: string) => {
        setProductosCantidad(prevState =>
            prevState.map(producto =>
                producto.id === id
                    ? { ...producto, quantity: Math.max(0, producto.quantity - 1) }
                    : producto
            )
        );
    }

    const resetearCantidad = (id: string) => {
        setProductosCantidad(prevState =>
            prevState.map(producto =>
                producto.id === id ? { ...producto, quantity: 0 } : producto
            )
        );
    }

    const eliminarProducto = (id: string) => {
        setProductosCantidad(prevState => prevState.filter(producto => producto.id !== id));
    }

    return (
        <View className="flex-1 bg-white">
            <View className="flex-row items-center px-6 pt-8 mt-10 mb-4">
                <View className="w-12 items-start">
                    <TouchableOpacity onPress={() => {router.back()}}>
                        <ChevronLeftIcon color={"#3B82F6"}/>
                    </TouchableOpacity>
                </View>
                <Text className="flex-1 text-lg font-bold text-center">La Moderna</Text>
                <View className="w-12 flex-row items-center justify-end">
                    <TouchableOpacity>
                        <ExclamationTriangleIcon />
                    </TouchableOpacity>
                    <TouchableOpacity className="ml-8">
                        <CameraIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <Text className="ml-8 mt-10 text-md font-bold">Ticket No.1</Text>
            <TouchableOpacity 
                className="flex-row items-center justify-center mt-4 space-x-4 border  border-gray-400 rounded-lg p-4 mx-6"
                onPress={() => {setShowModal(true)}}
            >
                <PlusIcon />
                <Text className="font-bold ml-4">Agregar Productos</Text>
            </TouchableOpacity>
            <Text className="m-6 font-bold text-gray-600">Productos seleccionados</Text>
            <View className="flex-1 mb-6 ">
                <FlatList data={productosCantidad} renderItem={({item}) => (
                    <View className="flex-row items-center justify-between px-6 py-4">
                        <View className="space-y-2">
                            <Text className="font-bold">{item.name}</Text>
                            <Text className="font-bold text-[#5DBA00]">${item.price}</Text>
                        </View>
                        <View className="flex-1 flex-row items-center justify-end ">
                            <TouchableOpacity className="mr-4" onPress={() => {disminuirCantidad(item.id)}}>
                                <MinusCircleIcon color={item.quantity > 0 ? "#ed0a0aff" : "#D1D5DB"}/>
                            </TouchableOpacity>
                            <TextInput className="mr-4 font-bold" keyboardType="numeric" onChangeText={(text) => {
                                const quantity = parseInt(text);
                                if (!isNaN(quantity)) {
                                    setProductosCantidad(prevState =>
                                        prevState.map(producto =>
                                            producto.id === item.id
                                                ? { ...producto, quantity }
                                                : producto
                                        )
                                    );
                                }
                            }}>{item.quantity}</TextInput>
                            <TouchableOpacity className="mr-4" onPress={() => {aumentarCantidad(item.id)}}>
                                <PlusCircleIcon size={24} color={"#3B82F6"}/>
                            </TouchableOpacity>
                            <TouchableOpacity className="ml-16" onPress={() => {resetearCantidad(item.id)}}>
                                <ArrowPathIcon color="#6B7280" size={22} />
                            </TouchableOpacity>
                            <TouchableOpacity className="ml-6" onPress={() => {eliminarProducto(item.id)}}>
                                <TrashIcon color="#ef4444" size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}>
                </FlatList>
                {productosCantidad.length > 0 && (
                <TouchableOpacity className="flex-row w-11/12 items-center self-center justify-between px-6 py-4 border-t bg-[#031445ff] mb-10 rounded-lg">
                    <View>
                        <Text className="text-white font-medium">{productosCantidad.length} Productos</Text>
                        <Text className="text-white font-medium">Total: ${productosCantidad.reduce((total, item) => total + item.price * item.quantity, 0)}</Text>
                    </View>
                    <Text className="text-white font-bold">Generar Ticket</Text>
                </TouchableOpacity>
                )}
            </View>
            {showModal && (
                <Modal presentationStyle="pageSheet" animationType="slide">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View className="flex-1 items-center">
                            <HeaderBar onPress={() => { setShowModal(false); }} botonIzq="Cancelar" titulo="Agregar Productos" />
                            <SearchBar/>
                            <View className="mt-10 w-11/12">
                                <Text className="font-bold text-gray-600 mb-4">Mas Vendidos</Text>
                                <FlatList data={productosMasVendidos} renderItem={({item}) => (
                                    <SelectableListItem
                                        key={item.id}
                                        name={item.name}
                                        icon={<ShoppingBagIcon size={24} />}
                                        selected={selectedProducts.includes(item.id)}
                                        onPress={() => { setSelectedProducts(prev =>
                                            prev.includes(item.id)
                                                ? prev.filter(id => id !== item.id)
                                                : [...prev, item.id]
                                        ); }}
                                    />
                                )} />

                            </View>
                            <View className="mt-10 w-11/12 flex-1">
                                <Text className="font-bold text-gray-600 mb-4">Stock Ruta</Text>
                                <FlatList data={productosRuta} renderItem={({item}) => (
                                    <SelectableListItem
                                        key={item.id}
                                        name={item.name}
                                        icon={<ShoppingBagIcon size={24} />}
                                        selected={selectedProducts.includes(item.id)}
                                        onPress={() => { setSelectedProducts(prev =>
                                            prev.includes(item.id)
                                                ? prev.filter(id => id !== item.id)
                                                : [...prev, item.id]
                                        ); }}
                                    />
                                )} />
                                {selectedProducts.length > 0 && (
                                    <SelectionBar texto={`${selectedProducts.length} productos seleccionados`} onPress={() => agregarProductos(selectedProducts)} />
                                )}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
        </View>
    )
}

export default Productos;