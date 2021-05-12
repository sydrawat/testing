import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

describe('Greeting Suite', () => {
  test('Renders "hello human" as a text', () => {
    render(<Greeting />); //arrange
    const helloElement = screen.getByText(/hello human/i);
    expect(helloElement).toBeInTheDocument(); //assert
  });
  test('Renders "greeting from outer space" when button was NOT clicked', () => {
    render(<Greeting />); //arrange
    const greetingElement = screen.getByText('Greeting from outer space', {
      exact: false,
    });
    expect(greetingElement).toBeInTheDocument(); //assert
  });
  test('Render "changed" when button WAS clicked', () => {
    render(<Greeting />); //arrange
    //act -->  click the button!
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //assert
    const outputElement = screen.getByText('Changed', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test('Check if paragraph with "Greeting" text is not visible', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const hiddenTextElement = screen.queryByText('Greeting from outer space', {
      exact: false,
    });
    expect(hiddenTextElement).toBeNull();
  });
});
