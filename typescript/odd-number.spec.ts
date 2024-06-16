// Write your test here

import { findOddNumber } from "./odd-number";

test("[7] should return 7, because it occurs 1 time (which is odd).", () => {
  const inputs = [7];
  const oddNumber = findOddNumber(inputs);
  expect(oddNumber).toBe(7);
});

test("[0] should return 0, because it occurs 1 time (which is odd).", () => {
  const inputs = [0];
  const oddNumber = findOddNumber(inputs);
  expect(oddNumber).toBe(0);
});

test("[1,1,2] should return 2, because it occurs 1 time (which is odd).", () => {
  const inputs = [1, 1, 2];
  const oddNumber = findOddNumber(inputs);
  expect(oddNumber).toBe(2);
});

test("[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd)", () => {
  const inputs = [0, 1, 0, 1, 0];
  const oddNumber = findOddNumber(inputs);
  expect(oddNumber).toBe(0);
});

test("[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).", () => {
  const inputs = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
  const oddNumber = findOddNumber(inputs);
  expect(oddNumber).toBe(4);
});
