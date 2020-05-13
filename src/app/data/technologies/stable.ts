import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const stable: Technology = {
  "name": "stable",
  "age": "feudal",
  "color": "red",
  dependencies: [barracks.name, feudal_age.name]
}