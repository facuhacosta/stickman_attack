import React from 'react';
import { render } from '@testing-library/react';
import { StickmanHandler } from './stickman-handler';

describe('StickmanHandler Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<StickmanHandler />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});