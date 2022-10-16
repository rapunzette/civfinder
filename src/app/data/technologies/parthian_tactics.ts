import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';

;

export const parthian_tactics: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "parthian tactics",
  "age": "imperial",
  "color": "green",
  dependencies: [archery_range.name,]
}