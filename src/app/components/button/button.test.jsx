import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});