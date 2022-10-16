import { Technology } from 'src/app/models/technology.model';
;
import { archery_range } from './archery_range';

export const thumb_ring: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "thumb ring",
  "age": "castle",
  "color": "green",
  dependencies: [, archery_range.name]
}