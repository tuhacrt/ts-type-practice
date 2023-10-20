type Person = {
  name: string;
  age: number;
  1: string;
};

type PersonKey = keyof Person;

const personKey: PersonKey = 1;

/** Narrow the options that only contain keys as string */
type PersonKeyAndString = keyof Person & string;

/** So the { 1: string } of Person is not valid in this instance */
const personKeyAndString: PersonKeyAndString = 'name';

export { personKey, personKeyAndString };
