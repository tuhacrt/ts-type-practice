export type PersonMap = {
  //        ^?
  [key in 'firstName' | 'lastName']: string;
};

type SupportedEvent = {
  // ^?
  click: string;
  change: string;
  keyup: string;
  keydown: string;
};

export type EventHandler = {
  //        ^?
  [key in keyof SupportedEvent]: () => void;
};

export type ArraySet = {
  //        ^?
  Apple: Array<string>;
  Counts: Array<number>;
  Cow: string;
};

export type ToReadonly<T> =
{ [K in keyof T]: T[K] extends Array<any>
  ? Readonly<T[K]>
  : T[K] };

export type A = ToReadonly<ArraySet>;
//          ^?
