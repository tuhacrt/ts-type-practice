const conference = {
  name: 'MOPCON',
  year: 2021,
  isAddToCalendar: true,
  website: 'https://mopcon.org/2021/',
};

export type KeyOfConference = keyof typeof conference;
//          ^?

enum MANUFACTURE {
  APPLE = 'apple',
  SAMSUNG = 'samsung',
  GOOGLE = 'google',
  SONY = 'sony',
}

type Manufacture = `${MANUFACTURE}`;
//   ^?
type ManufactureKeys = keyof typeof MANUFACTURE;
//   ^?

export { Manufacture, ManufactureKeys };
