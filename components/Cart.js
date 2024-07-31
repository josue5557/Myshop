import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Cart = ({ route }) => {
  const { product, quantity } = route.params;

  const calculateTotal = () => {
    let total = product.price * quantity;
    let shipping = quantity * 50;
    if (quantity > 3) {
      shipping -= shipping * 0.1; // Descuento de 10% si hay más de 3 productos diferentes
    }
    return total + shipping;
  };

  return (
    <View>
      <Text>Carrito de Compras</Text>
      <FlatList
        data={[{ product, quantity }]} // Aquí puedes modificar para manejar múltiples productos
        keyExtractor={item => item.product.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.product.name}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio Total: ${item.product.price * item.quantity}</Text>
          </View>
        )}
      />
      <Text>Total a pagar: ${calculateTotal()}</Text>
    </View>
  );
};

export default Cart;
