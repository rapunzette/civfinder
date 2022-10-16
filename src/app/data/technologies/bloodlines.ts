import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';

export const bloodlines: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "bloodlines",
  "age": "feudal",
  "color": "green",
  dependencies: [stable.name]
}