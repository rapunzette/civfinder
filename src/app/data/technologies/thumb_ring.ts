import { Technology } from 'src/app/models/technology.model';
import { castle_age } from './castle_age';
import { archery_range } from './archery_range';

export const thumb_ring: Technology = {
  "name": "thumb ring",
  "age": "castle",
  "color": "green",
  dependencies: [, archery_range.name]
}