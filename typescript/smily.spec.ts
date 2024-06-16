// Write your test here

import { countSmilyFace } from "./smily";

test("[':)', ';(', ';}', ':-D'] should return 2", () => {
  const inputs = [":)", ";(", ";}", ":-D"];
  const amount = countSmilyFace(inputs);
  expect(amount).toBe(2);
});

test("[';D', ':-(', ':-)', ';~)'] should return 3", () => {
  const inputs = [";D", ":-(", ":-)", ";~)"];
  const amount = countSmilyFace(inputs);
  expect(amount).toBe(3);
});

test("[';]', ':[', ';*', ':$', ';-D'] should return 1", () => {
  const inputs = [";]", ":[", ";*", ":$", ";-D"];
  const amount = countSmilyFace(inputs);
  expect(amount).toBe(1);
});
