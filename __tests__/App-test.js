/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../App';
// Note: test renderer must be required after react-native.
import {fireEvent, render, waitFor} from '@testing-library/react-native';

it('displays heading Shopping List', () => {
  const {queryByText} = render(<App />);
  const title = queryByText('Shopping List');
  expect(title).toBeTruthy();
});

it('displays shopping list items', () => {
  const {queryByText} = render(<App />);
  const listOfItems = [
    'Milk',
    'Cookies',
    'Notebook',
    'Pencils',
    'DishWash liquid',
  ];

  listOfItems.map(itemText => {
    expect(queryByText(itemText)).toBeTruthy();
  });
});

it('displays delete icon for each item in shopping list', () => {
  const {queryAllByTestId} = render(<App />);
  expect(queryAllByTestId('remove-icon').length).toBe(5);
});

it('when user clicks delete, item is removed', async () => {
  const {findByText} = render(<App />);
  const milk = await findByText('Milk');
  fireEvent.press(milk);
  expect(await findByText('Milk')).toBeFalsy();
});
