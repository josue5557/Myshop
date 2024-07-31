import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CarouselComponent = ({ images }) => {
  const renderItem = ({ item }) => (
    <Image source={item} style={styles.carouselImage} />
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom: 20
  },
  carouselImage: {
    width: 300,
    height: 300
  }
});

export default CarouselComponent;
