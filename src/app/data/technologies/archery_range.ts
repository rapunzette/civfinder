import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const archery_range: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "archery range",
  "age": "feudal",
  "color": "red",
  dependencies: [barracks.name,],
}