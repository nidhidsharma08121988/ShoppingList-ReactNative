/**
 * @format
 */

import React from 'react';
import 'react-native';
import App from '../App';
// Note: test renderer must be required after react-native.
import {fireEvent, render, waitFor} from '@testing-library/react-native';

describe('App', () => {
  describe('Header', () => {
    it('displays heading Shopping List', () => {
      const {queryByText} = render(<App />);
      const title = queryByText('Shopping List');
      expect(title).toBeTruthy();
    });
  });

  describe('List of items', () => {
    it('must be displayed', () => {
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
  });
  describe('Delete Item', () => {
    it('displays delete icon', () => {
      const {queryAllByTestId} = render(<App />);
      expect(queryAllByTestId('remove-icon').length).toBe(5);
    });
    it('when user clicks delete, item is removed', async () => {
      const {queryByText, getAllByTestId} = render(<App />);
      const milkDelBtn = getAllByTestId('remove-icon')[0];
      fireEvent.press(milkDelBtn);
      await waitFor(() => {
        expect(queryByText('Milk')).toBeFalsy();
      });
    });
  });

  describe('Add item', () => {
    it('displays add icon', () => {
      const {queryByTestId} = render(<App />);
      const addIcon = queryByTestId('add-icon');
      expect(addIcon).toBeTruthy();
    });
    it('displays input box for text', async () => {
      const {queryByTestId} = render(<App />);
      const textInput = queryByTestId('text-input');
      expect(textInput).toBeTruthy();
    });
    it('when user clicks add icon, the item must be added to list', async () => {
      const {getByTestId, getByText} = render(<App />);
      const addIcon = getByTestId('add-icon');
      const textInput = getByTestId('text-input');

      fireEvent.changeText(textInput, 'Grocery');
      fireEvent.press(addIcon);

      await waitFor(() => {
        expect(getByText('Grocery')).toBeTruthy();
      });
    });
  });
});
