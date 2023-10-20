type SupportedEvent = {
  click: string;
  change: string;
  keyup: string;
  keydown: string;
};

type MappedValuesToFunction<T> = {
  [K in keyof T]: () => void;
};
type HandledEvent = MappedValuesToFunction<SupportedEvent>;
//   ^?
type ToEventHandler<T> = {
  [K in keyof T as `handle${Capitalize<string & K>}`]: T[K];
};

export type EventHandler = ToEventHandler<HandledEvent>;
//          ^?
