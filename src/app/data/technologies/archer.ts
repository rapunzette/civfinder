import { Technology } from 'src/app/models/technology.model';
import { archery_range } from './archery_range';

export const archer: Technology = {
  "name": "archer",
  "age": "feudal",
  "color": "blue",
  parentName: archery_range.name,
}