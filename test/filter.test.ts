import { Country } from '../src/data';
import {filterFunction} from '../src/utils/functions';

describe("Filter function test suite", () => {
    const results: Array<Country> = filterFunction("--filter=ry");
    test("Result array is not empty with 'ry' filter", () => {
       expect(results.length).toBeGreaterThan(0);
    });
    test("The first country for 'ry' filter is 'Uzuzozne'", () => {
        expect(results[0].name).toBe("Uzuzozne");
     });
     test("There is no people with empty animals array", () => {
        const countries = results.map(country => {
         const peopleWithEmptyAnimals = country.people.filter(person => person.animals.length === 0);
         if (peopleWithEmptyAnimals.length > 0) {
           return {
             ...country,
             people: peopleWithEmptyAnimals
           };
         }
         return null;
       })
       .filter(country => country !== null);
       expect(countries.length).toBe(0);
     });
});