import { Technology } from 'src/app/models/technology.model';
import { castle_age } from './castle_age';
import { stable } from './stable';

export const steppe_lancer: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "steppe lancer",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name,]
}