import React from 'react';
import { render } from '@testing-library/react';
import { Menu } from './menu';

describe('Menu Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});