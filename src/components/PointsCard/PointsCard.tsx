import React from 'react';
import styled from 'styled-components/native';

interface CardProps {
  month: string;
  points: string;
}

const Container = styled.View`
  width: 286px;
  height: 143px;
  background: #334FFA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 16px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  margin-bottom: 7px;
`;

const Description = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
  align-self: center;
`;

const PointsCard: React.FC<CardProps> = ({ month, points }) => {
  return (
    <Container testID='points-card-points'>
      <Title testID='month'>{month}</Title>
      <Description testID='points'>{points + ' pts'}</Description>
    </Container>
  );
};

export default PointsCard;