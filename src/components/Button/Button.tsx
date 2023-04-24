import React from 'react';
import styled from 'styled-components/native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const Container = styled.View`
  height: 50px;
  background: #334FFA;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`;
const StyledTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`;

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <StyledTouchableOpacity testID='button' onPress={onPress}>
      <Container>
        <Title testID='title'>{title}</Title>
      </Container>
    </StyledTouchableOpacity>
  );
};

export default Button;