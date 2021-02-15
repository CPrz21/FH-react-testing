import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('05-funciones file', () => {
  describe('getUser function', () => {
    test('should return an object', () => {
      const userTemp = {
        uid: 'ABC123',
        username: 'El_Papi1502'
      };
  
      const user = getUser();
  
      expect(userTemp).toEqual(user);
    })
  });
  
  describe('getUsuarioActivo function', () => {
    test('should return an object with NAME param', () => {
      const name = "Aida";
      const userTemp = {
        uid: 'ABC567',
        username: name
      }
      const activeUser = getUsuarioActivo(name);
      
      expect(userTemp).toEqual(activeUser);
    })
    
  })
  
  
  
})
