import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductCard from './ProductCard';

jest.mock('../../../assets/ArrowIcon.svg', () => 'ArrowIcon');


describe('<ProductCard />', () => {
  const onPressMock = jest.fn();
  const testProps = {
    id: '1',
    image: 'https://example.com/image.jpg',
    product: 'Example Product',
    createdAt: '2022-01-15T00:00:00.000Z',
    is_redemption: true,
    points: 100,
    onPress: onPressMock,
  };

  it('renders correctly with all props', () => {
    const { getByTestId } = render(<ProductCard {...testProps} />);
    const productName = getByTestId('product-name').props.children;
    const productDate = getByTestId('product-date').props.children;
    const productPoints = getByTestId('product-points').props.children;
    const productSign = getByTestId('product-sign').props.children;
    const productImage = getByTestId('product-image');

    expect(productImage.props.source.uri).toBe(testProps.image);
    expect(productName).toBe(testProps.product);
    expect(productDate).toContain('enero');
    expect(productPoints).toBe(testProps.points);
    expect(productSign).toContain('-');
  });

  it('fires onPress when pressed', () => {
    const { getByTestId } = render(<ProductCard {...testProps} />);
    fireEvent.press(getByTestId('product-card'));
    expect(onPressMock).toHaveBeenCalled();
  });
});