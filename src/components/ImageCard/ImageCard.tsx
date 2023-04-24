import React from 'react';
import styled from 'styled-components/native';

interface ImageCardProps {
  imageUri: string;
}

const Container = styled.View`
  width: 350px;
  height: 350px;
  background-color: white;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

const ImageCard: React.FC<ImageCardProps> = ({ imageUri }) => {
  return (
    <Container>
      <Image testID='image' source={{ uri: imageUri }} />
    </Container>
  );
};

export default ImageCard;