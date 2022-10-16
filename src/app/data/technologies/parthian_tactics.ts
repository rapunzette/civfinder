import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';

;

export const parthian_tactics: Technology = {
  cost: {
    "wood": 0,
    "gold": 250,
    "food": 200,
    "stone": 0
  },
  "name": "parthian tactics",
  "age": "imperial",
  "color": "green",
  dependencies: [archery_range.name,]
}