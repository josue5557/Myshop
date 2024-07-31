import React, { useState, useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput } from 'react-native';
import { CartContext } from '../context/CartContext'; // Asegúrate de tener un contexto para manejar el carrito
import CarouselComponent from './Carousel';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext); // Usa el contexto del carrito

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <CarouselComponent images={product.images} />  {/* Si tienes múltiples imágenes */}
      {/* <Image source={product.image} style={styles.image} /> */}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity.toString()}
        onChangeText={(value) => setQuantity(parseInt(value))}
      />
      <Button title="Agregar al carrito" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 50,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default ProductDetails;
