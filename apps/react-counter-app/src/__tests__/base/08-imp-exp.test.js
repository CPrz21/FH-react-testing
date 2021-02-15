import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe('08-imp-exp file', () => {
  describe('getHeroeById function', () => {
    test('should return an existing heroe object', () => {
      const heroeId = 1;
      const findHeroe = getHeroeById(heroeId);
      const heroeData = heroes.find(h => h.id === heroeId);

      expect(findHeroe).toEqual(heroeData);
    })
    
    test('should return undefined because is a non-existing heroe id', () => {
      const heroeId = 20;
      const findHeroe = getHeroeById(heroeId);
      const heroeData = heroes.find(h => h.id === heroeId);

      expect(findHeroe).toEqual(heroeData);
      expect(findHeroe).toBe(undefined);
    })
  })
  
  describe('getHeroesByOwner function', () => {
    test('should return an array with DC heroes', () => {
      const ownerName="DC";
      const findByOwner = getHeroesByOwner(ownerName);
      const heroeData = heroes.filter(o => o.owner === ownerName);

      expect(findByOwner).toEqual(heroeData);
    })

    test('should return length from heroes array', () => {
      const ownerName="Marvel";
      const findByOwner = getHeroesByOwner(ownerName);
      const heroeData = heroes.filter(o => o.owner === ownerName);

      expect(findByOwner.length).toBe(heroeData.length);
    })
    
    test('should return an empty array when id doesnt match', () => {
      const ownerName="Other";
      const findByOwner = getHeroesByOwner(ownerName);

      expect(findByOwner).toEqual([]);
    })
    
  })
  
  
})
