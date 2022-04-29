import React from 'react';
import { render } from '@testing-library/react';
import { HealthBar } from './health-bar';

describe('HealthBar Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<HealthBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});