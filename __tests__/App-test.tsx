/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react-native';
import {Button} from '../src/components/Button';
import * as api from '../src/api/api';
import {Shop} from '../src/screen/shop';

jest.mock('../src/api/api');
describe('Shop app Component', () => {
  it('renders correctly', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when add to cart pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(<Button onPress={onPress} />);
    const button = getByText('Add cart');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('should render product names when api responds', async () => {
    // For this test, when getProducts is called
    // return the given value wrapped in a Promise
    api.getProducts.mockResolvedValue({
      results: [{name: 'product 1'}],
    });
    // Render the component
    render(<Shop />);
    // See if the product name we returned in the mock is visible
    await waitFor(() => {
      screen.getAllByRole('Flatlist');
    });
  });

  it('should render error message when api fails', async () => {
    api.getProducts.mockRejectedValue({});
    render(<Shop />);
    await waitFor(() => {
      screen.getByText('Unable to fetch data');
    });
  });
});
