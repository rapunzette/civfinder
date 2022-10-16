import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
;

export const camel_rider: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "camel rider",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name,]
}