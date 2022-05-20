import React from 'react'
import { render } from '@testing-library/react'
import { UserProfile } from './'

describe('UserProfile Component', () => {
  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<UserProfile />)
    expect(asFragment()).toMatchSnapshot()
  })

  // Unit tests
})
