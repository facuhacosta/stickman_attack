import React from 'react';
import { render } from '@testing-library/react';
import { WeaponCard } from './weapon-card';

describe('WeaponCard Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<WeaponCard />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  // Unit tests

  test('it should match the snapshot 2', () => {
    const weapon = {
      name: "pistol",
      value: 5,
      attack_speed: 10,
      damage: 100,
    }
    const { asFragment } = render(<WeaponCard weapon={weapon}/>);
    expect(asFragment()).toMatchSnapshot();
  });

});