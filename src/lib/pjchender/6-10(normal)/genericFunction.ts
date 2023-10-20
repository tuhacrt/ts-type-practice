type User = Readonly<{
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
}>;

// const getJavaScript = (obj, key) => obj[key];

const get = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

const user: User = <const>{
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isAdmin: true,
};

const getUserName = get<User, 'firstName' | 'lastName'>;

const a = getUserName(user, 'firstName');
const b = get(user, 'age');
const c = get(user, 'isAdmin');

export { a, b, c };
