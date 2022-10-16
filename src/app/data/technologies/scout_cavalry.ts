import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';

export const scout_cavalry: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "scout cavalry",
  "age": "feudal",
  "color": "blue",
  dependencies: [stable.name]
}