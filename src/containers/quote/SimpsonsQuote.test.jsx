import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from '../quote/SimpsonsQuote'

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res (
      ctx.json([{
        quote: 'D\'ooahhhh',
        character: 'Homer',
        image: 'http://www.fillmurray.com/g/200/300'
      }])
    )
  })
);

describe('simpsons quote generator', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('should fetch a quote AFTER the button is pressed' , () => {
    render(<SimpsonsQuote />);

    const button = screen.getByRole('button')
    fireEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Homer');
      screen.getByText('D\'ooahhhh');
    })
  })
})
