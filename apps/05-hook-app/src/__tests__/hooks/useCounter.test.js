import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('useCounter Custom Hook', () => {
  test('should return default values', () => {
    const {
      result: { 
        current:{
          counter,
          decrement,
          increment,
          reset
        }
      }
    } = renderHook(() => useCounter());
  
    expect(counter).toBe(10);
    expect(typeof decrement).toBe('function');
    expect(typeof increment).toBe('function');
    expect(typeof reset).toEqual('function');
  });

  test('should return the number sended', () => {
    const num = 21;
    const {
      result: { 
        current:{
          counter,
        }
      }
    } = renderHook(() => useCounter(21));
  
    expect(counter).toBe(21);
  });

  test('should increase 1', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { increment } = result.current;

    act(()=> increment());

    const { counter } = result.current;
    expect(counter).toBe(101);
  })
  
  test('should decrease -1', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { decrement } = result.current;

    act(()=> decrement());

    const { counter } = result.current;
    expect(counter).toBe(99);
  })

  test('should reset to 100', () => {
    const { result } = renderHook(()=>useCounter(100));
    const { increment, reset } = result.current;

    act(()=> {
      increment();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  })
  
})
