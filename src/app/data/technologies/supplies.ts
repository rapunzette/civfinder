import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const supplies: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "supplies",
  "age": "feudal",
  "color": "green",
  dependencies: [barracks.name,],
}