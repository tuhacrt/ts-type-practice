export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

export type R1 = ReturnType<() => string>; // string
//          ^?
export type R2 = ReturnType<(s: string) => Array<number>>; // number[]
//          ^?
export type R3 = ReturnType<string>; // any
//          ^?

export type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

export type P1 = Parameters<(a: number, b: string) => number>; // [a: number, b: string]
//          ^?
export type P2 = Parameters<(a: Array<number>) => number>; // [a: number[]]
//          ^?
export type P3 = Parameters<(a: { firstName: string; lastName: string }) => string>; // [a: { firstName: string; lastName: string; }]
//          ^?
export type P4 = Parameters<(...a: Array<number>) => number>; // number[]
//          ^?
export type P5 = Parameters<string>; // never
//          ^?
