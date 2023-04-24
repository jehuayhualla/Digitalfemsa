import React from 'react';
import { render } from '@testing-library/react-native';
import WelcomeHeader from './WelcomeHeader';

describe('<WelcomeHeader />', () => {
  const testProps = {
    title: 'Example Title',
    subtitle: 'Example Subtitle'
  };

  it('renders correctly with title and subtitle props', () => {
    const { getByTestId } = render(<WelcomeHeader {...testProps} />);
    const title = getByTestId('welcome-header-title').props.children;
    const subtitle = getByTestId('welcome-header-subtitle').props.children;
    expect(title).toBe('Example Title');
    expect(subtitle).toBe('Example Subtitle');
  });

  it('renders correctly without subtitle prop', () => {
    const { queryByTestId } = render(<WelcomeHeader {...testProps} subtitle={undefined} />);
    const subtitle = queryByTestId('welcome-header-subtitle');
    expect(subtitle).toBeNull();
  });
});