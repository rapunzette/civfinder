import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';

export const arson: Technology = {
  cost: {
    "wood": 0,
    "gold": 50,
    "food": 150,
    "stone": 0
  },
  "name": "arson",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name,],
}