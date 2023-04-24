import React from 'react';
import { render } from '@testing-library/react-native';
import SectionHeader from './SectionHeader';

describe('<SectionHeader />', () => {
  const testProps = {
    title: 'Example Title'
  };

  it('renders correctly with title prop', () => {
    const { getByTestId } = render(<SectionHeader {...testProps} />);
    const title = getByTestId('section-header-title').props.children;
    expect(title).toBe('Example Title');
  });
});