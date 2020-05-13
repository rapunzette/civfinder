import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';

export const bloodlines: Technology = {
  "name": "bloodlines",
  "age": "feudal",
  "color": "green",
  dependencies: [stable.name]
}