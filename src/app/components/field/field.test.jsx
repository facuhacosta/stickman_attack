import React from 'react';
import { render } from '@testing-library/react';
import { Field } from './field';

describe('Field Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Field />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});