import { manipulate } from "./manipulate";
import { isEqual } from "lodash";

test("With input 'a': Your function should return: ['a']", () => {
  const input = "a";
  const results = manipulate(input);
  const expectResults = ["a"];
  const compareResult = isEqual(results, expectResults);
  expect(compareResult).toBe(true);
});

test("With input 'ab': Your function should return: ['ab', 'ba']", () => {
  const input = "ab";
  const results = manipulate(input);
  const expectResults = ["ab", "ba"];
  const compareResult = isEqual(results, expectResults);
  expect(compareResult).toBe(true);
});

test("With input 'abc': Your function should return: ['abc','acb','bac','bca','cab','cba']", () => {
  const input = "abc";
  const results = manipulate(input);
  const expectResults = ["abc", "acb", "bac", "bca", "cab", "cba"];
  const compareResult = isEqual(results, expectResults);

  expect(compareResult).toBe(true);
});

test("With input 'aabb': Your function should return: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']", () => {
  const input = "aabb";
  const results = manipulate(input);
  const expectResults = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];
  const compareResult = isEqual(results, expectResults);
  expect(compareResult).toBe(true);
});
