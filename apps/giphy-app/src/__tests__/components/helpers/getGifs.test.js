import { getGifs } from "../../../helpers/getGifs";

describe('getGifs Helper', () => {
  test('should return 10 items []', async () => {
    const gifs = await getGifs("dbz");
    expect(gifs.length).toBe(10);
  })
  
  test('should return empty [] when send empty string', async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  })
  
})
