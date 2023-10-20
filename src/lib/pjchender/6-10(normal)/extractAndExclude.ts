export type Extract<T, U> = T extends U ? T : never;

export type T1 = Extract<'a' | 'b' | 'c', 'a'>;
export type T2 = Extract<'a' | 'b' | 'c', 'a' | 'b'>;
export type T3 = Extract<string | number | (() => void), ((...xs: Array<any>) => any)>;
export type T4 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
export type T5 = Extract<string | number, number>;
export type T6 = Extract<string | number, boolean>;

export type Exclude<T, E> = T extends E ? never : T;

export type T7 = Exclude<'a' | 'b' | 'c', 'a'>;

export type NonNullable<T> = T extends undefined | null ? never : T;
