import React from 'react';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';

interface HeaderProps extends ViewProps {
  title: string;
  subtitle?: string;
}

const HeaderContainer = styled.View`
  flex-direction: column;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: #020202;
`;

const Subtitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #020202;
`;

const WelcomeHeader: React.FC<HeaderProps> = ({ title, subtitle, ...rest }) => {
  return (
    <HeaderContainer {...rest}>
      <Title testID='welcome-header-title'>{title}</Title>
      {subtitle && <Subtitle testID='welcome-header-subtitle'>{subtitle}</Subtitle>}
    </HeaderContainer>
  );
};

export default WelcomeHeader;