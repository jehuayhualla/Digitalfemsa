import React from 'react';
import { render } from '@testing-library/react-native';
import ImageCard from './ImageCard';

describe('<ImageCard />', () => {
  it('renders correctly with imageUri prop', () => {
    const imageUri = 'https://example.com/image.jpg';
    const { getByTestId } = render(<ImageCard imageUri={imageUri} />);
    const image = getByTestId('image');
    expect(image.props.source.uri).toBe(imageUri);
  });
});