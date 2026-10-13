import { View, Image, Text } from 'react-native';
import React from 'react';

interface DataProp {
  item: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: any;
    title: string;
  };
}

export const ProductItem = ({ item }: DataProp) => {
  return (
    <View>
      <Image source={{ uri: item.image }} style={{ width: 60, height: 60 }} />
      <Text>{item.category}</Text>
      <Text>
        {item.title.length > 50
          ? item.title.substring(0, 50) + '....'
          : item.title}
      </Text>
      
      <Text>${item.price}</Text>

      <Text>
        {item.description.length > 50
          ? item.description.substring(0, 50) + '....'
          : item.description}
      </Text>
    </View>
  );
};
