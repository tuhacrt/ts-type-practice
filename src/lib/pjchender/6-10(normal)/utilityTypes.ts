type Manufacture = 'Apple' | 'Google' | 'Samsung' | 'Sony';

type Product = {
  name: string;
  price: number;
  manufacturer: Manufacture;
  isLaunched: boolean;
};

/** OrNull */
type OrNull<T> = T | null;

type ManufactureOrNull = OrNull<Manufacture>;

const manufacture: ManufactureOrNull = 'Apple';

/** OneOrMany */
type OneOrMany<T> = T | Array<T>;

type ManufactureOrManufactures = OneOrMany<Manufacture>;

const manufactures: ManufactureOrManufactures = ['Apple', 'Google'];

/** OneOrManyOrNull */
type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>;

type OneOrManyOrNullOfManufacture = OneOrManyOrNull<Manufacture>;

const manufacturesData: OneOrManyOrNullOfManufacture = null;

/** Keys, Values, Pick */
type Keys<T> = keyof T & string;

type KeysOfProduct = Keys<Product>;

type Values<T> = T[keyof T];

type ValuesOfProduct = Values<Product>;

type Pick<K, V extends keyof K> = K[V];

export { manufacture, manufactures, manufacturesData, KeysOfProduct, ValuesOfProduct, Pick };
