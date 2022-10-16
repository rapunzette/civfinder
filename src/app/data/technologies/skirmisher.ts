import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';
import { feudal_age } from './feudal_age';

export const skirmisher: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "skirmisher",
  "age": "feudal",
  "color": "blue",
  dependencies: [archery_range.name],
}