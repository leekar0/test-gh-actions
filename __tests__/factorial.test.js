import factorial from '../src/index';

test('factorial', () => {
  expect(factorial(5)).toEqual(120);
});