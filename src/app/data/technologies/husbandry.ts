import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
import { castle_age } from './castle_age';

export const husbandry: Technology = {
  "name": "husbandry",
  "age": "castle",
  "color": "green",
  dependencies: [stable.name,]
}