import data, { Country } from '../data';

/**
 * Apply filter to the data
 * @param filter the string to filter the data by
 * @returns Array<Country>
 */
export const filterFunction = (filter: string): Array<Country> => {
    const pattern = filter.split('=')[1];
    // return countries whith at least one people
    return data.map(country => {
      // return people whith at least one animal matching the filter
      const filteredPeople = country.people.map(person => {
        const filteredAnimals = person.animals.filter(animal => animal.name.includes(pattern));
        return { ...person, animals: filteredAnimals };
      }).filter(person => person.animals.length > 0);
      return { ...country, people: filteredPeople };
    })
    .filter(country => country.people.length > 0);
}

/**
 * Apply count operation to the data
 * @returns Array<Country>
 */
export const countFunction  = (): Array<Country> => {
  return data.map(country => {
    const peopleCount = country.people.length;
    const updatedPeople = country.people.map(person => {
      const animalCount = person.animals.length;
      return {
        ...person,
        name: `${person.name} [${animalCount}]`,
        animals: person.animals
      };
    });

    return {
      ...country,
      name: `${country.name} [${peopleCount}]`,
      people: updatedPeople
    };
  });
}