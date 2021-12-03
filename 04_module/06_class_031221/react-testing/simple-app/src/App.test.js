import { render, screen } from '@testing-library/react';
import App from './App';

// 1st argument: description
// 2nd argument: an anonymous function with the test code.
test('renders learn react link', () => {
  render(<App />); // Render App component to 'load' it.
  const linkElement = screen.getByText(/learn react/i); // Get an element from your component. In this case we are using a RegEx.
  expect(linkElement).toBeInTheDocument(); // Evaluates this expression and return true or false.
});
