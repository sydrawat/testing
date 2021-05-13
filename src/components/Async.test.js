import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component Test Suite', () => {
  test('Renders posts if requests succeeds', async () => {
    //arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First dummy post' }],
    });
    render(<Async />);
    //act...nothing
    //assert
    const posts = await screen.findAllByRole('listitem');
    expect(posts).not.toHaveLength(0);
  });
});
