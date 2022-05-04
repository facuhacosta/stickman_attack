import React from 'react';
import { render } from '@testing-library/react';
import { Castle } from './castle';

describe('Castle Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Castle />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});