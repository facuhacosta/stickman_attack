import React from 'react';
import { render } from '@testing-library/react';
import { Description } from './description';

describe('Description Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Description />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});