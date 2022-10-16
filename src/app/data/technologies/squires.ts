import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
;

export const squires: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "squires",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name,],
}