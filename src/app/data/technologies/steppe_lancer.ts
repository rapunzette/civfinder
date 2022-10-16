import { Technology } from 'src/app/models/technology.model';
;
import { stable } from './stable';

export const steppe_lancer: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "steppe lancer",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name,]
}