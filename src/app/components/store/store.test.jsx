import React from 'react';
import { render } from '@testing-library/react';
import { Store } from './store';

describe('Store Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Store />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});