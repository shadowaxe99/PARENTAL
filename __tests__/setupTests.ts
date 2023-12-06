import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/dont-cleanup-after-each';
import { configure } from '@testing-library/react';

// Extend Jest matchers to include additional matchers for the DOM
import 'jest-axe/extend-expect';

// Configure the React Testing Library
// This is used to set a custom testId attribute, which defaults to 'data-testid'
configure({ testIdAttribute: 'id' });
// Import necessary testing libraries and utilities
import { render, fireEvent } from '@testing-library/react';
import App from '../src/App';

// Unit Test: Check if the App component renders without crashing
test('renders App component without crashing', () => {
  render(<App />);
});

// Unit Test: Check if the input field is rendered
test('renders input field', () => {
  const { getByTestId } = render(<App />);
  const inputElement = getByTestId('input-field');
  expect(inputElement).toBeInTheDocument();
});

// Integration Test: Check if the input field updates the visualizer
test('input field updates visualizer', () => {
  const { getByTestId } = render(<App />);
  const inputElement = getByTestId('input-field');
  
  // Simulate user input
  fireEvent.change(inputElement, { target: { value: '50' } });
  
  // Check if the visualizer is updated
  const visualizerElement = getByTestId('visualizer');
  expect(visualizerElement.textContent).toBe('50');
});