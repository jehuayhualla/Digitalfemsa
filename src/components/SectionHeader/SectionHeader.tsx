import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';

interface HeaderProps extends ViewProps {
  title: string;
}

const HeaderContainer = styled.View`
  flex-direction: column;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #9B9898;
`;

const SectionHeader: React.FC<HeaderProps> = ({ title, ...rest }) => {
  return (
    <HeaderContainer testID='section-header' {...rest}>
      <Title testID='section-header-title'>{title}</Title>
    </HeaderContainer>
  );
};

export default SectionHeader;