import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';

export const militia: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "militia",
  "age": "dark",
  "color": "blue",
  dependencies: [barracks.name],
}