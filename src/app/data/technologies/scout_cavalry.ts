import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';

export const scout_cavalry: Technology = {
  "name": "scout cavalry",
  "age": "feudal",
  "color": "blue",
  dependencies: [stable.name]
}