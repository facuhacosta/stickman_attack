import React from 'react';
import { render } from '@testing-library/react';
import { LoadingScreen } from './loading-screen';

describe('LoadingScreen Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<LoadingScreen />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});