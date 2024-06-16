/**
 *
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    throw new Error("Input array is require, and have at lease 1 element.");
  }
  if (numbers.length === 1) {
    return numbers[0];
  }

  const countObj: Record<string, number> = {};
  for (const num of numbers) {
    if (countObj.hasOwnProperty(num)) {
      countObj[num] = countObj[num] + 1;
    } else {
      countObj[num] = 1;
    }
  }

  const countObjKeys = Object.keys(countObj);

  for (const key of countObjKeys) {
    if (countObj[key] % 2 === 1) {
      return Number(key);
    }
  }
}
