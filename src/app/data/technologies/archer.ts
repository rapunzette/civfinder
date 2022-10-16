import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';

export const archer: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "archer",
  "age": "feudal",
  "color": "blue",
  dependencies: [archery_range.name],
}