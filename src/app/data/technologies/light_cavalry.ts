import { Technology } from 'src/app/models/technology.model';
import { castle_age } from './castle_age';
import { scout_cavalry } from './scout_cavalry';

export const light_cavalry: Technology = {
  "name": "light cavalry",
  "age": "castle",
  "color": "blue",
  dependencies: [, scout_cavalry.name]
}