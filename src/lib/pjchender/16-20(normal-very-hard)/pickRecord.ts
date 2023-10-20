export type Pick<T, K extends keyof T> = { [P in K]: T[P] };
//          ^?

export type Person = {
//          ^?
  firstName: string;
  lastName: string;
  age: number;
};

export type PickNoAge = Pick<Person, 'firstName' | 'lastName'>;
//          ^?

export type Record<K extends keyof any, T> = { [P in K]: T };
//          ^?

export type ConferenceName = 'ModernWeb' | 'MOPCON' | 'JSDOC' | '{Laravel x Vue}';
export type Conference = {
  name: string;
  year: number;
  isAddToCalendar: boolean;
  website: string;
};

export type ConferenceSet = Record<ConferenceName, Conference>;
//          ^?
