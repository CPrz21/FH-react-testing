import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('useFecth Custom Hook', () => {
  test('should return the default information', () => {
    const { result } =  renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, error, loading } = result.current;
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  })
  
  test('should return the desired information', async() => {
    const { result, waitForNextUpdate } =  renderHook(()=>useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data.length).toBe(1);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  })
  
  test('should return error message', async() => {
    const { result, waitForNextUpdate } =  renderHook(()=>useFetch('https://www.breakingbadapi.com/apid/quotes/1'));
    await waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).not.toBe(null);
    expect(error).toEqual('We could not load your info');
  })
  
  
})
