import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button';

describe('<Button />', () => {
  it('renders correctly with title prop', () => {
    const { getByTestId } = render(<Button title="Click me" />);
    const titleText = getByTestId('title').props.children;
    expect(titleText).toBe('Click me');
  });

  it('fires onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button title="Click me" onPress={mockOnPress} />,
    );
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});