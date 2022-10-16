import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
import { castle_age } from './castle_age';

export const husbandry: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "husbandry",
  "age": "castle",
  "color": "green",
  dependencies: [stable.name,]
}