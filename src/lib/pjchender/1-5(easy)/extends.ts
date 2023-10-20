type Person = { name: string; age: number };
type Author<T extends Person> = T & { books: Array<string> };

/**
 * The extends of types need to fit the original type, but the extends can be more than the original type.
 * Like the anyOther property in the following example.
 */
const tuhacrt: Author<{ name: string; age: number; anyOther: unknown }> = {
  name: 'tuhacrt',
  age: 18,
  anyOther: 'anyOther',
  books: ['book1', 'book2'],
};

export { tuhacrt };
