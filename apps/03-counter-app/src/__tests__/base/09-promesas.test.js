import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeByIdAsync } from "../../base/09-promesas";

describe('09-promesas file', () => {
  describe('getHeroeByIdAsync function', () => {
    test('should return a heroe async', (done) => {
      const heroeId = 2;
      getHeroeByIdAsync(heroeId).then(heroe => {
        expect(heroe).toEqual(heroes[heroeId - 1]);
        done();
      })
    })
    
    test('should return an error message when send an un-existing id', (done) => {
      const heroeId = 20;
      getHeroeByIdAsync(heroeId).catch(error =>{
        expect(typeof error).toBe('string');
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      })
    })
    
  })
  
})
