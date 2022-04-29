import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
// import { Index } from './index'

describe('App Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

});