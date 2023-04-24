import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/RootNavigation';
import styled from 'styled-components/native';
import useProducts from '../hooks/useProducts';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import WelcomeHeader from '../components/WelcomeHeader';
import SectionHeader from '../components/SectionHeader';
import PointsCard from '../components/PointsCard';
import ProductList from '../components/ProductList';
import BottomFilter from '../components/BottomFilter/BottomFilter';
import { ProductProps } from '../types/types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParamList, 'Home'>;


function HomeScreen({ navigation }: Props) {
  const { data, isLoading, error } = useProducts();
  const [listData, setListData] = useState<ProductProps[]>(data);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    if(data) {
      setListData(data);
    }
    if(error) {
      console.log(error);
    }
  },[data, error]);

  useEffect(() => {
    if(data) {
      setListData(data);
    }
  },[data]);

  const ProductListMemoized = useCallback(() => <ProductList data={listData} />, [listData]);

  const totalPoints = useMemo(() => {
    if(!data) return 0;
    return data?.reduce((acc: number, item: ProductProps) => {
      if(item.is_redemption)
        return acc - item.points;
      else
        return acc + item.points;
    }, 0);
  },[data]);

  const filteredEarns = useMemo(() => {
    if(!data) return [];
    return data?.filter((item: ProductProps) => item.is_redemption === false)
  },[data]);

  const filteredRedemptions = useMemo(() => {
    if(!data) return [];
    return data?.filter((item: ProductProps) => item.is_redemption === true)
  },[data]);

  const handleShowAll = () => {
    setListData(data);
  };

  const handleShowRedemption = () => {
    setListData(filteredRedemptions);
  };

  const handleShowEarns = () => {
    setListData(filteredEarns);
  };

  if(isLoading) {
    return (<Spinner />);
  }

  if(error || !data) {
    return (<ErrorMessage message='Something went wrong!' />);
  }
  return (
    <Container insets={insets}>
      <StyledWelcomeHeader title='Bienvenido de vuelta!' subtitle='Ruben Rodriguez'/>
      <StyledSectionHeader title='TUS PUNTOS'/>
      <CardContainer>
        <PointsCard month='Diciembre' points={Intl.NumberFormat('en-US').format(totalPoints)} />
      </CardContainer>
      <StyledSectionHeader title='TUS MOVIMIENTOS'/>
      <ProductListMemoized />
      <BottomFilter 
        onShowAll={handleShowAll} 
        onShowEarns={handleShowEarns} 
        onShowRedemption={handleShowRedemption} 
      />
      </Container>
  );
}
const Container = styled.View<{ insets: any }>`
  flex: 1;
  padding-top: ${props => props.insets.top}px;
  padding-bottom: ${props => props.insets.bottom}px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
`;

const StyledWelcomeHeader = styled(WelcomeHeader)`
  margin-bottom: 20px;
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin-bottom: 20px;
`;

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export default HomeScreen;