import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
;

export const knight: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "knight",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name,]
}