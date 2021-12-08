import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting />', () => {
  test('Renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    /* 
    screen.get --> This functions will throw an error if an element is not found.
    screen.find --> This functions will return a Promise.
    screen.query --> This functions will NOT throw an error if an element is not found.
    */
    const helloPeopleElement = screen.getByText('Hello People', {
      exact: false,
    });
    // expect(helloPeopleElement).not.toBeInTheDocument()
    expect(helloPeopleElement).toBeInTheDocument();
  });

  test('Renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('Renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('Does not renders "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
