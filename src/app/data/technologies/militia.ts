import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';

export const militia: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "militia",
  "age": "dark",
  "color": "blue",
  dependencies: [barracks.name],
}