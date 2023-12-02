import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/dont-cleanup-after-each';
import { configure } from '@testing-library/react';

// Extend Jest matchers to include additional matchers for the DOM
import 'jest-axe/extend-expect';

// Configure the React Testing Library
// This is used to set a custom testId attribute, which defaults to 'data-testid'
configure({ testIdAttribute: 'id' });