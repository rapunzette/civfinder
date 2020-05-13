import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const eagle_scout: Technology = {
  "name": "eagle scout",
  "age": "feudal",
  "color": "blue",
  dependencies: [barracks.name, feudal_age.name],
}