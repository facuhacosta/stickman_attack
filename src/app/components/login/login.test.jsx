import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './login';

describe('Login Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests

});