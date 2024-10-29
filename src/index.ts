import { Country } from './data';
import { countFunction, filterFunction } from './utils/functions';

const main = (): void => {
    const args = process.argv.slice(2);
    const filterArg = args.find(arg => arg.startsWith('--filter='));
    const countArg = args.find(arg => arg.startsWith('--count'));
    if (!filterArg && !countArg) {
        console.error('Please enter at least one argument');
        process.exit(1);
    }
    if (filterArg) {
      const resultsFilter: Array<Country> = filterFunction(filterArg);
      console.log(JSON.stringify(resultsFilter, null, 2));
    }
    if (countArg) {
      const resultsCount: Array<Country> = countFunction();
      console.log(JSON.stringify(resultsCount, null, 2));
    }
};

main();