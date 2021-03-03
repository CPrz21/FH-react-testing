import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe('useForm Custom Hook', () => {

  const initialForm = {
    name: 'Carlos Pérez',
    email: 'cperez@mail.com'
  }

  const newName = 'Aida Flores';
  const newEmail = 'AFlores@mail.com';

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  })
  
  test('should change form name value', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(()=>handleInputChange({
      target:{ 
        name: 'name',
        value: newName
      }
    }))

    const [values] = result.current;
    const { name } = values;
    expect(name).toEqual(newName);
    expect(values).toEqual({ ...initialForm, name: newName });
  })
  
  test('should change form email value', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(()=>handleInputChange({
      target:{ 
        name: 'email',
        value: newEmail
      }
    }))

    const [values] = result.current;
    const { email } = values;
    expect(email).toEqual(newEmail);
  })

  test('should reset form values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    act(()=>{
      const handleInputChange = result.current[1];
      handleInputChange({
        target:{ 
          name: 'name',
          value: newName
        }
      })
    })
    
    act(()=>{
      const handleInputChange = result.current[1];
      handleInputChange({
        target:{ 
          name: 'email',
          value: newEmail
        }
      })
    })

    act(()=>{
      const reset = result.current[2];
      reset();
    })

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  })
  
  
})
