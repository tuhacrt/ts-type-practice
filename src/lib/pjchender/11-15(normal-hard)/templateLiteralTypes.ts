export type HandledEvent = 'change' | 'click' | 'keydown';
//          ^?
export type EventHandler = `on${HandledEvent}`;
//          ^?

type X = 'left' | 'right';
type Y = 'top' | 'bottom';
export type Position = `${X}-${Y}`;
//          ^?

enum MANUFACTURE {
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  GOOGLE = 'google',
  SONY = 'sony',
}

export type Manufacture = `${MANUFACTURE}`;
//          ^?
