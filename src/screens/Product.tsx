import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNavigation';
import styled from 'styled-components/native';
import ImageCard from '../components/ImageCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { StatusBar } from 'react-native';
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
type Props = StackScreenProps<RootStackParamList, 'Product'>;

const dtf = new Intl.DateTimeFormat('es-Es',{
  year: 'numeric',
  month: 'long',
  day: '2-digit'
})

function ProductScreen({ navigation, route }: Props) {
  const { product, points, image, createdAt } = route.params;

  const insets = useSafeAreaInsets();

  const handleNavigation = () => {
    navigation.navigate('Home');
  }

  return (
    <Container insets={insets}>
      <StatusBar barStyle="light-content" backgroundColor="#CFD6FF" />
      <HeaderTitle>{product}</HeaderTitle>
      <ProductContainer >
        <ImageCard imageUri={image} />
        <StyledSectionHeader title="Detalles del producto:" />
        <DateText>{'Comprado el ' + dtf.format(new Date(createdAt))}</DateText>
        <StyledSectionHeader title="Con esta compra acumulaste:" />
        <Points>{points + ' puntos'} </Points>
        <ButtonContainer>
          <Button title='Aceptar' onPress={handleNavigation} />
        </ButtonContainer>
      </ProductContainer>
    </Container>
  );
}

const Container = styled.View<{ insets: any }>`
  flex: 1;
  padding-top: ${props => props.insets.top}px;
  padding-bottom: ${props => props.insets.bottom}px;
  background-color: #CFD6FF;
`;

const HeaderTitle = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  color: #000000;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0 20px;
`;

const ProductContainer = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  padding: 20px;
  flex-direction: column;
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin-top: 32px;
  margin-bottom: 19px;
`;

const DateText = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

const Points = styled.Text`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
`;

const ButtonContainer = styled.View`
  margin-top: 32px;
`;
export default ProductScreen;