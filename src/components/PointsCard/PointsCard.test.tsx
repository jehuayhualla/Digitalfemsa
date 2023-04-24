import React from 'react';
import { render } from '@testing-library/react-native';

import PointsCard from './PointsCard';

describe('<PointsCard />', () => {
  it('renders correctly with month and points props', () => {
    const testMonth = 'June';
    const testPoints = '1000';
    const { getByTestId } = render(
      <PointsCard month={testMonth} points={testPoints} />,
    );
    const month = getByTestId('month');
    const points = getByTestId('points');

    expect(month.props.children).toBe(testMonth);
    expect(points.props.children).toContain(testPoints);
  });
});