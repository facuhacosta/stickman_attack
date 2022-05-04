import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  // Matching Snapshots
  test('App should match the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

});