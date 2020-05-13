import { Technology } from 'src/app/models/technology.model';
import { castle_age } from './castle_age';
import { stable } from './stable';

export const steppe_lancer: Technology = {
  "name": "steppe lancer",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name, castle_age.name]
}