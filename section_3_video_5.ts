//ModuleA.ts
const getName = (): string => {
    return 'John';
};

export default getName

//ModuleB.ts
export const getSurname = (): string => {
    return 'Snow';
};

//example.ts
import getName from './moduleA'
import { getSurname } from './moduleB'

getName();
getSurname();

//build command
// tsc example.ts