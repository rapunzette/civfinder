import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const spearman: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "spearman",
  "age": "feudal",
  "color": "blue",
  dependencies: [barracks.name,],
}