import React from 'react';
import { Convert, currencyChar } from './helpers';

test('Converts 100 GBP to USD with rate 1.29', () => {
  const rate = Convert('100', '1', '1.29');
  expect(rate).toBe('129.00');
});

test('Current char form GBP', () => {
  const char = currencyChar('GBP');
  expect(char).toBe('£');
});
