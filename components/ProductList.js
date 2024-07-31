import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { products } from '../data/products';

const ProductList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
            <View style={{ padding: 10, borderBottomWidth: 1 }}>
              <Image source={item.image} style={{ width: 100, height: 100 }} />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductList;
