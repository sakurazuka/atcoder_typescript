import {
  greet,
  welcomeToAtCoder,
  product,
  placingMarbles,
  shiftOnly
} from './beginners_selection.ts';

import {
  assert,
  assertEquals
} from "https://deno.land/std@0.94.0/testing/asserts.ts";

Deno.test('Hello Test', () => {
  assert('Hello');
});

Deno.test('gree #1', () => {
  assertEquals(greet('Tom'), 'Hello, Tom!');
});

Deno.test('welcomeToAtCoder #1', () => {
  const input = [
    '1',
    '2 3',
    'test'
  ];
  assertEquals(welcomeToAtCoder(input), '6 test');
});
Deno.test('welcomeToAtCoder #2', () => {
  const input = [
    '72',
    '128 256',
    'myonmyon'
  ];
  assertEquals(welcomeToAtCoder(input), '456 myonmyon');
});

Deno.test('product #1', () => {
  const input = [
    '3 4'
  ];
  assertEquals(product(input), 'Even');
});
Deno.test('product #2', () => {
  const input = [
    '1 21'
  ];
  assertEquals(product(input), 'Odd');
});

Deno.test('placingMarbles #1', () => {
  const input = [
    '101'
  ];
  assertEquals(placingMarbles(input), '2');
});
Deno.test('placingMarbles #2', () => {
  const input = [
    '000'
  ];
  assertEquals(placingMarbles(input), '0');
});

Deno.test('shiftOnly #1', () => {
  const input = [
    '3',
    '8 12 40'
  ];
  assertEquals(shiftOnly(input), '2');
});
Deno.test('shiftOnly #2', () => {
  const input = [
    '4',
    '5 6 8 10'
  ];
  assertEquals(shiftOnly(input), '0');
});
Deno.test('shiftOnly #3', () => {
  const input = [
    '6',
    '382253568 723152896 37802240 379425024 404894720 471526144'
  ];
  assertEquals(shiftOnly(input), '8');
});
