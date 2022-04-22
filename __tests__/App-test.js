/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../App';
// Note: test renderer must be required after react-native.
import {fireEvent, render, waitFor} from '@testing-library/react-native';

it('renders correctly', () => {
  render(<App />);
});

it('displays heading Shopping List', async () => {
  const {findByText} = render(<App />);
  expect(await findByText('Shopping list')).toBeTruthy();
});

it('displays shopping list items', async () => {
  const {findByText} = render(<App />);

  await waitFor(() => {
    expect(findByText('Milk')).toBeTruthy();
    expect(findByText('Cookies')).toBeTruthy();
    expect(findByText('Pencils')).toBeTruthy();
    expect(findByText('Dishwasher liquid')).toBeTruthy();
  });
});

it('displays delete icon for each item in shopping list', async () => {
  const {findAllByTestId} = render(<App />);
  expect((await findAllByTestId('remove-icon')).length).toBe(5);
});

it('when user clicks delete, item is removed', async () => {
  const {findByText} = render(<App />);
  const milk = await findByText('Milk');
  fireEvent.press(milk);
  expect(await findByText('Milk')).toBeFalsy();
});
