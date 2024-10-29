import { Country } from '../src/data';
import {countFunction} from '../src/utils/functions';

describe("Count function test suite", () => {
    const results: Array<Country> = countFunction();
    test("Result array is not empty", () => {
       expect(results.length).toBeGreaterThan(0);
    });
    test("Dillauti has 5 people", () => {
        expect(results[0].name).toBe("Dillauti [5]");
     });
     test("The first people in Dillauty is Winifred Graham and has 6 animals", () => {
        expect(results[0].people[0].name).toBe("Winifred Graham [6]");
     });
});