/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../src/components/Button';

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
// test('function testing', () => {
//   const AppRef = renderer.create(<App />).getInstance();
//   const input = AppRef?.getData(2);
//   console.log(input);
// });

// test('state testing', () => {
//   const AppRef = renderer.create(<App />).getInstance();
//   const input = AppRef?.getData(12);

//   console.log(input);
//   expect(AppRef?.state?.counter).toEqual(12);
// });
