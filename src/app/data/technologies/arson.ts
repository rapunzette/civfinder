import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { castle_age } from './castle_age';

export const arson: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "arson",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name,],
}