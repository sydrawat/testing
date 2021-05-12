import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component Test Suite', () => {
  test('Renders posts if requests succeeds', async () => {
    //arrange
    render(<Async />);
    //act
    //assert
    const posts = await screen.findAllByRole('listitem');
    expect(posts).not.toHaveLength(0);
  });
});
