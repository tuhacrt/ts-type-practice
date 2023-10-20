type Person = {
  firsName: string;
  lastName: string;
  age: number;
  isEmployed: boolean;
};

// Index Access Type
type AgeOfPerson = Person['age']; // number

type ValuesOfPerson = Person[keyof Person]; // string | number | boolean

export { AgeOfPerson, ValuesOfPerson };
