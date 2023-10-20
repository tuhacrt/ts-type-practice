export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//          ^?

export type Person = {
//          ^?
  firstName: string;
  lastName: string;
  age: number;
};

export type ToName = Omit<Person, 'age'>;
//          ^?
