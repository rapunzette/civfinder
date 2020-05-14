import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
import { castle_age } from './castle_age';

export const knight: Technology = {
  "name": "knight",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name, castle_age.name]
}