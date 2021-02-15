import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe('11-async-await file', () => {
  test('should return a url string', async() => {
    const url = await getImagen();
    expect(url.includes('https://')).toBe(true);
  })
})
