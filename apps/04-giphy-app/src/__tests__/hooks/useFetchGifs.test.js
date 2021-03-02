import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('useFetchGifs', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs('one punch'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })
  
  test('should return an array with images and loading false', async() => {
    const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs('one punch'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  })
  
})
