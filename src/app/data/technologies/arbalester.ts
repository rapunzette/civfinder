import { Technology } from 'src/app/models/technology.model';
import { crossbowman } from './crossbowman';
import { imperial_age } from './imperial_age';

export const arbalester: Technology = {
  "name": "arbalester",
  "age": "imperial",
  "color": "blue",
  dependencies: [crossbowman.name, imperial_age.name],
}