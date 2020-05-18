import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';
import { castle_age } from './castle_age';

export const cavalry_archer: Technology = {
  "name": "cavalry archer",
  "age": "castle",
  "color": "blue",
  dependencies: [archery_range.name,],
}