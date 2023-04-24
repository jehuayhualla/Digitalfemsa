import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeScreen from './Home';
import useSWR from 'swr';
import { RootStackParamList } from '../navigation/RootNavigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

jest.mock('swr');
jest.mock('../../assets/ArrowIcon.svg', () => 'ArrowIcon');
jest.mock('react-native-config', () => ({
  config: {}
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: jest.fn().mockReturnValue({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
  };
});

const navigation: StackNavigationProp<RootStackParamList, 'Home'> = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  dispatch: jest.fn(),
  canGoBack: jest.fn(),
  isFocused: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  replace: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  setParams: jest.fn(),
  getParent: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn()
};

const route: RouteProp<RootStackParamList, 'Home'> = {
  key: 'Home',
  name: 'Home',
  params: undefined,
};

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    (useSWR as jest.Mock).mockImplementation((key, fetcher) => {
      return {
        data: [
          {
            id: '1',
            image: 'https://example.com/image1.jpg',
            product: 'Example Product 1',
            createdAt: '2021-12-01T00:00:00.000Z',
            is_redemption: true,
            points: 100,
          },
          {
            id: '2',
            image: 'https://example.com/image2.jpg',
            product: 'Example Product 2',
            createdAt: '2021-12-02T00:00:00.000Z',
            is_redemption: false,
            points: 200,
          },
        ],
        isLoading: false,
        error: null,
      }
    });
    const { getByTestId } = render(<HomeScreen navigation={navigation} route={route} />);
    const welcomeHeaderTitle = getByTestId('welcome-header-title').props.children;
    const welcomeHeaderSubtitle = getByTestId('welcome-header-subtitle').props.children;
    const pointsCardPoints = getByTestId('points').props.children;
    const productListItem = getByTestId('flat-list');
    const bottomFilter = getByTestId('bottom-filter');
    expect(welcomeHeaderTitle).toBe('Bienvenido de vuelta!');
    expect(welcomeHeaderSubtitle).toBe('Ruben Rodriguez');
    expect(pointsCardPoints).toBe('100 pts');
    expect(productListItem).toBeDefined();
    expect(bottomFilter).toBeDefined();
  });

  it('should render spinner when loading', async () => {
    (useSWR as jest.Mock).mockImplementation((key, fetcher) => {
      return {
        data: null,
        isLoading: true,
        error: null,
      }
    });
    const { getByTestId } = render(<HomeScreen navigation={navigation} route={route}/>);
    await waitFor(() => { const spinner = getByTestId('spinner');
      expect(spinner).toBeDefined();
    });
  });

});