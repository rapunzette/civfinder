import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const spearman: Technology = {
  "name": "spearman",
  "age": "feudal",
  "color": "blue",
  dependencies: [barracks.name, feudal_age.name],
}