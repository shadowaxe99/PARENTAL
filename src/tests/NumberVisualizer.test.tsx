import React from 'react';
import { render, screen } from '@testing-library/react';
import NumberVisualizer from '../components/NumberVisualizer';

describe('NumberVisualizer Component', () => {
  // Update the test cases to include the new `color` prop and clamping logic
  // For example, in the test 'renders the progress bar with correct value', we need to use the clamp function
  test('renders the progress bar with correct value', () => {
    const testValue = 150; // Value greater than max
    const maxValue = 100;
    render(<NumberVisualizer value={testValue} max={maxValue} color="#ff0000" />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-valuenow', maxValue.toString()); // Clamped to max value
    expect(progressBar).toHaveStyle(`backgroundColor: #ff0000`); // Custom color
  });

  test('displays the correct percentage based on value and max value', () => {
    const testValue = 30;
    const maxValue = 120;
    const expectedPercentage = (testValue / maxValue) * 100;
    render(<NumberVisualizer value={testValue} maxValue={maxValue} />);
    const percentageDisplay = screen.getByText(`${expectedPercentage}%`);
    expect(percentageDisplay).toBeInTheDocument();
  });

  test('does not render negative values', () => {
    const testValue = -10;
    const maxValue = 100;
    render(<NumberVisualizer value={testValue} maxValue={maxValue} />);
    const progressBar = screen.queryByRole('progressbar');
    expect(progressBar).not.toHaveAttribute('aria-valuenow', testValue.toString());
  });

  test('does not exceed the maximum value', () => {
    const testValue = 150;
    const maxValue = 100;
    render(<NumberVisualizer value={testValue} maxValue={maxValue} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', maxValue.toString());
  });

  test('is accessible with proper aria-label', () => {
    const testValue = 60;
    const maxValue = 100;
    render(<NumberVisualizer value={testValue} maxValue={maxValue} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'progress bar');
  });
});

// Documentation
/*
## State Management
The `useNumberState` hook is used to manage the state of the number and the maximum number. It provides the current value, a setter function to update the value, and a function to set the maximum number. It also includes functions to increment and decrement the number by configurable step sizes.
## Components
### NumberInput Component
`NumberInput.tsx` allows the user to input a number with validation and debounce logic. It takes a `label` prop for accessibility and an `onChange` callback to update the state in the parent component when the input changes.
### NumberVisualizer Component
`NumberVisualizer.tsx` is responsible for displaying the visual representation of the number with a customizable color. It uses the `clamp` function to ensure the value does not exceed the maximum allowed value and includes a smooth transition effect for the progress bar fill.
*/