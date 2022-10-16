import { Technology } from 'src/app/models/technology.model';
import { pikeman_research } from './pikeman_research';

export const pikeman: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "pikeman",
  "age": "castle",
  "color": "blue",
  dependencies: [pikeman_research.name],
}