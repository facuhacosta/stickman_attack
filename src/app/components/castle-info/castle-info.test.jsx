import React from 'react'
import { render } from '@testing-library/react'
import { CastleInfo } from './castle-info'

describe('CastleInfo Component', () => {
  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CastleInfo />)
    expect(asFragment()).toMatchSnapshot()
  })

  // Unit tests
})
