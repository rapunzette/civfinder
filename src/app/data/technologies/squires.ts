import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { castle_age } from './castle_age';

export const squires: Technology = {
  "name": "squires",
  "age": "castle",
  "color": "green",
  dependencies: [barracks.name, castle_age.name],
}