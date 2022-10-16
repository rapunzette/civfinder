import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
;

export const husbandry: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 150,
    "stone": 0
  },
  "name": "husbandry",
  "age": "castle",
  "color": "green",
  dependencies: [stable.name,]
}