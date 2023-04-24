import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ProductProps } from '../../types/types';
import ProductCard from '../ProductCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation';

interface ProductData extends ProductProps {}

interface ProductListProps {
  data: ProductData[];
}

const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const ProductList: React.FC<ProductListProps> = ({data}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const handleOnProductPress = (item: ProductData) => {
    navigation.navigate('Product', { ...item })
  }

  const renderItem = ({ item }: { item: ProductData }) => (
    <ProductCard
      id={item.id}
      image={item.image}
      product={item.product}
      createdAt={item.createdAt}
      is_redemption={item.is_redemption}
      points={item.points}
      onPress={() => {handleOnProductPress(item)}}
    />
  );

  const keyExtractor = (item: ProductData) => item.id;

  return (
    <Container>
      <FlatList
        testID='flat-list'
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default ProductList;