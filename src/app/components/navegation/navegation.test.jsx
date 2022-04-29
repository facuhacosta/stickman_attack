import React from 'react';
import { render } from '@testing-library/react';
import { Navegation } from './navegation';

describe('Navegation Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Navegation />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});