import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberInput from '../components/NumberInput';

describe('NumberInput Component', () => {
  test('renders NumberInput component', () => {
    render(<NumberInput value={50} onChange={() => {}} max={100} />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toBeInTheDocument();
  });

  test('allows users to input a number', () => {
    const handleChange = jest.fn();
    render(<NumberInput value={50} onChange={handleChange} max={100} />);
    const inputElement = screen.getByRole('spinbutton');
    fireEvent.change(inputElement, { target: { value: '70' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(70);
  });

  test('does not allow input greater than max value', () => {
    const handleChange = jest.fn();
    render(<NumberInput value={50} onChange={handleChange} max={100} />);
    const inputElement = screen.getByRole('spinbutton');
    fireEvent.change(inputElement, { target: { value: '150' } });
    expect(handleChange).not.toHaveBeenCalledWith(150);
  });

  test('does not allow negative input', () => {
    const handleChange = jest.fn();
    render(<NumberInput value={50} onChange={handleChange} max={100} />);
    const inputElement = screen.getByRole('spinbutton');
    fireEvent.change(inputElement, { target: { value: '-10' } });
    expect(handleChange).not.toHaveBeenCalledWith(-10);
  });

  test('is accessible with proper aria attributes', () => {
    render(<NumberInput value={50} onChange={() => {}} max={100} aria-label="Number Input" />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toHaveAttribute('aria-label', 'Number Input');
  });
});