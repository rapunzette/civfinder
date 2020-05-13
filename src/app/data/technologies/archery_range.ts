import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const archery_range: Technology = {
  "name": "archery range",
  "age": "feudal",
  "color": "red",
  dependencies: [barracks.name, feudal_age.name],
}