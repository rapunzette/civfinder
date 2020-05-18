import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';
import { imperial_age } from './imperial_age';

export const parthian_tactics: Technology = {
  "name": "parthian tactics",
  "age": "imperial",
  "color": "green",
  dependencies: [archery_range.name,]
}