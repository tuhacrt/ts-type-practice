import { identity } from 'ramda';

import type { Prettify } from '../../base';

import houses from './houses.json';

type House = { name: string; planets: string | Array<string> };
type HouseWithID = Prettify<{ id: number } & House>;

function findHouses(houses: Array<House>): Array<HouseWithID>;
function findHouses(houses: string): Array<HouseWithID>;

function findHouses(houses: Array<House>, filter: (house: House) => boolean): Array<HouseWithID>;
function findHouses(houses: string, filter: (house: House) => boolean): Array<HouseWithID>;

function findHouses(input: string | Array<House>, filterFn?: (house: House) => boolean) {
  const houses = typeof input === 'string' ? JSON.parse(input) as Array<House> : input;
  return houses
    .filter(filterFn ?? identity)
    .map(house => ({ id: houses.indexOf(house), ...house }));
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides'));

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
