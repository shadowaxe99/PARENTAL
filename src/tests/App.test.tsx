import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import NumberInput from '../components/NumberInput';
import NumberVisualizer from '../components/NumberVisualizer';

describe('App component tests', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/Number Visualizer/i)).toBeInTheDocument();
  });

  test('renders NumberInput and NumberVisualizer components', () => {
    render(<App />);
    expect(screen.getByTestId('number-input')).toBeInTheDocument();
    expect(screen.getByTestId('number-visualizer')).toBeInTheDocument();
  });

  test('updates visualizer when number input changes', () => {
    render(<App />);
    const inputElement = screen.getByTestId('number-input') as HTMLInputElement;
    const visualizerElement = screen.getByTestId('number-visualizer');

    fireEvent.change(inputElement, { target: { value: '50' } });
    expect(inputElement.value).toBe('50');
    expect(visualizerElement.textContent).toContain('50');
  });

  test('does not exceed the maximum value in visualizer', () => {
    render(<App />);
    const inputElement = screen.getByTestId('number-input') as HTMLInputElement;
    const visualizerElement = screen.getByTestId('number-visualizer');

    fireEvent.change(inputElement, { target: { value: '150' } });
    expect(inputElement.value).toBe('150');
    expect(visualizerElement.textContent).not.toContain('150'); // Assuming max is 100
  });

  test('visualizer reflects the correct percentage based on input', () => {
    render(<App />);
    const inputElement = screen.getByTestId('number-input') as HTMLInputElement;
    const visualizerElement = screen.getByTestId('number-visualizer');

    fireEvent.change(inputElement, { target: { value: '25' } });
    expect(visualizerElement.style.width).toBe('25%'); // Assuming visualizer width changes based on input
  });

  test('input is accessible by label', () => {
    render(<App />);
    expect(screen.getByLabelText(/Enter number/i)).toBeInTheDocument();
  });

  test('visualizer has proper accessibility attributes', () => {
    render(<App />);
    const visualizerElement = screen.getByTestId('number-visualizer');
    expect(visualizerElement).toHaveAttribute('role', 'progressbar');
    expect(visualizerElement).toHaveAttribute('aria-valuenow');
    expect(visualizerElement).toHaveAttribute('aria-valuemin');
    expect(visualizerElement).toHaveAttribute('aria-valuemax');
  });
});