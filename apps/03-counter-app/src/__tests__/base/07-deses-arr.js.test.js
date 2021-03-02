import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe('07-deses-arr file', () => {
  test('should return an array with a string and a number', () => {
    const [letters, numbers] = retornaArreglo(); // ['ABC', 123]

    expect([letters, numbers]).toEqual(['ABC', 123]);
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  })
  
})
