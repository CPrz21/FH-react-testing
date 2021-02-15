
import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe('02-template-string file', () => {
  
  test('Should return a string "Hola NAME" ', () => {
    
    const name = "Aida";
    const greeting = getSaludo(name);

    expect(greeting).toBe("Hola " + name);
  })
  
  test('Should return a default string (carlos) when name param is empty', () => {
    
    const greeting = getSaludo();

    expect(greeting).toBe("Hola Carlos");
  })
  
})
