import { Technology } from 'src/app/models/technology.model';
import { stable } from './stable';

export const bloodlines: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "bloodlines",
  "age": "feudal",
  "color": "green",
  dependencies: [stable.name]
}