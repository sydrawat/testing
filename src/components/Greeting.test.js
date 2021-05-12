import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

describe('Greeting Suite', () => {
  test('Renders hello human as a text', () => {
    //arrange
    render(<Greeting />);
    //act
    //...nothing
    //assert
    const helloElement = screen.getByText('Hello Human');
    expect(helloElement).toBeInTheDocument();
  });
});
