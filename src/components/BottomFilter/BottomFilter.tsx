import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from '../Button';

interface BottomFilteProps {
  onShowAll: () => void;
  onShowRedemption: () => void;
  onShowEarns: () => void;
}

const Container = styled.View`
  flex-direction: row;
  margin-top: 16px;
  height: 50px;
  gap: 13px;
`;


const BottomFilter: React.FC<BottomFilteProps> = ({ onShowAll, onShowEarns, onShowRedemption}) => {
  const [showingAll, setShowingAll] = useState<boolean>(false);

  const handleShowAll = () => {
    setShowingAll(false);
    onShowAll();
  };

  const handleShowRedemption = () => {
    setShowingAll(true);
    onShowRedemption();
  };

  const handleShowEarns = () => {
    setShowingAll(true);
    onShowEarns();
  };

  return (
    <Container testID='bottom-filter'>
      {showingAll ? (<Button title='Todos' onPress={handleShowAll} />):
      (<><Button title='Ganados' onPress={handleShowEarns} />
      <Button title='Canjeados' onPress={handleShowRedemption} /></>)}
    </Container>
  );
};

export default BottomFilter;