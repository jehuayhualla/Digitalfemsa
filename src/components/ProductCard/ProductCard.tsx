import React from 'react';
import styled from 'styled-components/native';
import ArrowIcon from '../../../assets/ArrowIcon.svg';
import { ProductProps } from '../../types/types';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HorizontalCardProps extends ProductProps {
  onPress: () => void;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 55px;
  margin-bottom: 18px;
`;

const ProductImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  margin-right: 16px;
`;

const Content = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 7px;
`;

const DateText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000000
`;

const Points = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  margin-right: 18px;
`;

const Sign = styled.Text<{ isRedemption: boolean }>`
  margin-right: -4px;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: ${props => props.isRedemption ? '#FF0000' : '#00B833'};
`;

const dtf = new Intl.DateTimeFormat('es-Es',{
  year: 'numeric',
  month: 'long',
  day: '2-digit'
})

const ProductCard: React.FC<HorizontalCardProps> = ({
  id,
  image,
  product,
  createdAt,
  is_redemption: isRedemption,
  points,
  onPress
}) => {
  return (
    <TouchableOpacity testID='product-card' onPress={onPress}>
      <Container>
        <ProductImage testID='product-image' source={{ uri: image }} />
        <Content>
          <Name testID='product-name'>{product}</Name>
          <DateText testID='product-date'>{dtf.format(new Date(createdAt))}</DateText>
        </Content>
        <Sign testID='product-sign' isRedemption={isRedemption}> {isRedemption ? '-' : '+'} </Sign>
        <Points testID='product-points'>{points}</Points>
        <ArrowIcon width={10} height={10} fill='#070707' />
      </Container>
    </TouchableOpacity>
  );
};

export default ProductCard;