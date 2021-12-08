import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('<Async />', () => {
  test('Renders posts if request succeeds', async () => {
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [{ id: 'p1', title: 'First post' }],
    // });
    render(<Async />);

    // const listItemElements = screen.getAllByRole('listitem');
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
