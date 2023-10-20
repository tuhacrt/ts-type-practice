export type Prettify<T> = { [K in keyof T]: T[K] } & unknown;

export type Optional<T, K extends keyof T = keyof T> = Prettify<Omit<T, K> & Partial<Pick<T, K>>>;
//          ^?

export type Conference = {
//          ^?
  name: string;
  year: number;
  isAddToCalendar: boolean;
  website: string;
};

export type OpConference = Optional<Conference, 'isAddToCalendar' | 'website'>;
//          ^?
