import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const supplies: Technology = {
  "name": "supplies",
  "age": "feudal",
  "color": "green",
  dependencies: [barracks.name, feudal_age.name],
}