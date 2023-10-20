export type Flatten<T> = T extends Array<any> ? T[number] : T;
