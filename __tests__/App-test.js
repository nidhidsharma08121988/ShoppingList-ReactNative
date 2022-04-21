/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen, waitFor} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});
it('displays heading Shopping List', async () => {
  const app = render(<App />);
  await waitFor(() => {
    expect(app.findByText('Shopping list')).toBeTruthy();
  });
});

it('displays shopping list items', async()=>{
    const app = render(<App />);
    await waitFor(() => {
      expect(app.findByText('Milk')).toBeTruthy();
      expect(app.findByText('Cookies')).toBeTruthy();
      expect(app.findByText('Pencils')).toBeTruthy();
      expect(app.findByText('Dishwasher liquid')).toBeTruthy();
  });
})