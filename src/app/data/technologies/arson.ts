import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { castle_age } from './castle_age';

export const arson: Technology = {
  "name": "arson",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name, castle_age.name],
}