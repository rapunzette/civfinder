import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';

export const scout_cavalry: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "scout cavalry",
  "age": "feudal",
  "color": "blue",
  dependencies: [stable.name]
}