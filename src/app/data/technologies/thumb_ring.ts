import { Technology } from 'src/app/models/technology.model';
import { castle_age } from './castle_age';
import { archery_range } from './archery_range';

export const thumb_ring: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "thumb ring",
  "age": "castle",
  "color": "green",
  dependencies: [, archery_range.name]
}