// Property Modifiers: ?, readonly
export type Person = {
//          ^?
  firstName: string;
  lastName?: string; // lastName is optional
  readonly age: number; // you should not mutate the age
};

export type ToOptional<T> = { [K in keyof T]?: T[K] };
//          ^?

export type DiOptional<T> = { [K in keyof T]-?: T[K] };
//          ^?

export type ToReadonly<T> = { readonly [K in keyof T]: T[K] };
//          ^?

export type DiReadonly<T> = { -readonly [K in keyof T]: T[K] };
//          ^?

export type OptionalPerson = ToOptional<Person>;
//          ^?
export type ReadonlyPerson = ToReadonly<Person>;
//          ^?

export type DiOptionalPerson = DiOptional<Person>;
//          ^?

export type DiReadonlyPerson = DiReadonly<Person>;
//          ^?
