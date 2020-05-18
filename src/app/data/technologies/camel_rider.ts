import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';
import { castle_age } from './castle_age';

export const camel_rider: Technology = {
  "name": "camel rider",
  "age": "castle",
  "color": "blue",
  dependencies: [stable.name,]
}