import sumMinElem from '../src/index.js';

test('sumMinElem', () => {
  const arr = [4, 0, 3, 19, 492, -10, 1];
  expect(sumMinElem(arr)).toEqual(-10);
});

test('empty', () => {
  const arr = [];
  expect(sumMinElem(arr)).toEqual([]);
});

test('sting', () => {
  const arr = 'string';
  expect(sumMinElem(arr)).toEqual([]);
});

test('one num', () => {
  const arr = [1];
  expect(sumMinElem(arr)).toEqual(1);
});

test('sting and number in arr', () => {
  const arr = [1, 0, 2, 3, 'string'];
  expect(sumMinElem(arr)).toEqual([]);
});
