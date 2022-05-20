import React from 'react';
import { render } from '@testing-library/react';
import { Router } from './router';

describe('Router Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Router />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});