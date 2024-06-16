export const smilyRegex = /[:;][-~]?[)D]/;

/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
  if (texts.length === 0) {
    return 0;
  }

  let countSmily = 0;
  for (const text of texts) {
    const trimedText = text.trim();
    if (smilyRegex.test(trimedText)) {
      countSmily = countSmily + 1;
    }
  }

  return countSmily;
}
