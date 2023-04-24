import React from 'react';
import { render } from '@testing-library/react-native';
import ProductList from './ProductList';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
  };
});
jest.mock('../../../assets/ArrowIcon.svg', () => 'ArrowIcon');
describe('<ProductList />', () => {
  const testProps = {
    data: [
      {
        id: '1',
        image: 'https://example.com/image1.jpg',
        product: 'Example Product 1',
        createdAt: '2022-01-01T00:00:00.000Z',
        is_redemption: true,
        points: 100,
      },
      {
        id: '2',
        image: 'https://example.com/image2.jpg',
        product: 'Example Product 2',
        createdAt: '2022-02-01T00:00:00.000Z',
        is_redemption: false,
        points: 200,
      },
    ],
  };

  it('renders correctly with data prop', () => {
    const { getByTestId } = render(<ProductList {...testProps} />);
    const flatList = getByTestId('flat-list');
    expect(flatList.props.data).toBe(testProps.data);
  });
});