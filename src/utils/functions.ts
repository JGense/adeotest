import data, { Country } from '../data';

/**
 * Apply filter to the data
 * @param filter the string to filter the data by
 * @returns Array<Country>
 */
export const filterFunction = (filter: string): Array<Country> => {
    const pattern = filter.split('=')[1];
    return data.map(country => {
      const peoplesFiltered = country.people.map(people => {
        const animalsFiltered = people.animals.filter(animal => animal.name.includes(pattern));
        return { ...people, animals: animalsFiltered };
      }).filter(person => person.animals.length > 0); // return people whith at least one animal matching the filter
      return { ...country, people: peoplesFiltered };
    })
    .filter(country => country.people.length > 0); // return countries whith at least one people
}

/**
 * Apply count operation to the data
 * @returns Array<Country>
 */
export const countFunction  = (): Array<Country> => {
  return data.map(country => {
    const peopleCount = country.people.length;
    const peopleUpdated = country.people.map(person => {
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
      people: peopleUpdated
    };
  });
}