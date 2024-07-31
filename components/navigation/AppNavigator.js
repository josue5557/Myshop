import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Lista de Productos' }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Detalles del Producto' }} />
      <Stack.Screen name="Cart" component={Cart} options={{ title: 'Carrito de Compras' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
