import React from 'react'
import { render } from '@testing-library/react'
import { WeaponDetails } from './weapon-details'

describe('WeaponDetails Component', () => {
  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<WeaponDetails />)
    expect(asFragment()).toMatchSnapshot()
  })

  // Unit tests
})
