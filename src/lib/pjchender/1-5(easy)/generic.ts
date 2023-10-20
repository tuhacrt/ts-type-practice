type PersonWithNumberAge = { name: string; age: number };

type PersonWithStringAge = { name: string; age: string };

/**
 * Generic type can be used to create a type that can be used with different types.
 * The following example is a generic type that can be used with different types.
 */
type Person<T> = { name: string; age: T };

const x: Person<number> = { name: 'test', age: 10 };

const y: Person<string> = { name: 'test', age: '10' };

const z: Person<unknown> = { name: 'test', age: { year: 10, month: 6 } };

export { x, y, z, PersonWithNumberAge, PersonWithStringAge };
