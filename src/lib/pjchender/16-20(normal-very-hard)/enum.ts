export enum GENDER { MALE = 'male', FEMALE = 'female' }

export type T1 = GENDER extends string ? true : false;
//          ^?
export type T2 = string extends GENDER ? true : false;
//          ^?

export type T3 = number extends GENDER ? true : false;
//          ^?

export type T4 = 'male' extends GENDER ? true : false;
//          ^?
export type T5 = GENDER.MALE extends GENDER ? true : false;
//          ^?
export type T6 = GENDER.MALE extends string ? true : false;
//          ^?
