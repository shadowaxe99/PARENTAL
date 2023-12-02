import React from 'react';
import { render, screen } from '@testing-library/react';
import NumberVisualizer from '../components/NumberVisualizer';

describe('NumberVisualizer Component', () => {
  test('renders the progress bar with correct value', () => {
    const testValue = 50;
    const maxValue = 100;
    render(<NumberVisualizer value={testValue} maxValue={maxValue} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-valuenow', testValue.toString());
    expect(progressBar).toHaveAttribute('aria-valuemax', maxValue.toString());
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