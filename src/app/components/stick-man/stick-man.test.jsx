import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { StickMan } from './stick-man';

describe('StickMan Component', () => {

  // Matching Snapshots
  test('it should match the snapshot', () => {
    const { asFragment } = render(<StickMan />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Unit tests
  it('should log on click', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const { getByTestId } = render(<StickMan />);
    fireEvent.click(getByTestId('stickman-testId'));
    expect(consoleSpy).toHaveBeenCalledWith('click');
    jest.clearAllMocks();
  });

  // it('should log on click', async () => {
  //   const consoleSpy = jest.spyOn(console, 'log');
  //   const {  } = render(<StickMan />);
  //   await waitFor(() => {
  //     setTimeout(() => {
        
  //     }, 200);
  //     expect(consoleSpy).toHaveBeenCalledWith('change speed');
  //   })
  // });

  // it('should increment speed', () => {
  //   const changeSpeed  = jest.fn();
  //   const { getByTestId, debug } = render(<StickMan changeSpeed={changeSpeed} />);
  //   console.log(debug());
  //   waitFor(()=> {
  //     setTimeout(() => {
        
  //     }, 400);
  //   })
  //   expect(getByTestId('stickman-testId')).toHaveProperty('canplay');
  //   console.log(debug());
  //   expect(getByTestId('stickman-testId')).toHaveProperty('playbackrate', 2);
  //   expect(changeSpeed).toHaveBeenCalled();
    
  // });
});