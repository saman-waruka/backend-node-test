/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
  if (text.length === 0) {
    return [];
  }

  return permute(text);
}

function permute(str: string) {
  const results: string[] = [];

  if (str.length === 1) {
    return [str];
  }

  const chars = str.split("");
  const uniquePermutations = new Set<string>();

  function permuteRecursive(current: string, remaining: string[]) {
    if (remaining.length === 0) {
      uniquePermutations.add(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permuteRecursive(
        current + remaining[i],
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      );
    }
  }

  permuteRecursive("", chars);

  uniquePermutations.forEach((perm) => results.push(perm));
  return results;
}
