import { Technology } from 'src/app/models/technology.model';
import { pikeman_research } from './pikeman_research';

export const pikeman: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "pikeman",
  "age": "castle",
  "color": "blue",
  dependencies: [pikeman_research.name],
}