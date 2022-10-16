import { Technology } from 'src/app/models/technology.model';
import { arbalester_research } from './arbalester_research';

export const arbalester: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "arbalester",
  "age": "imperial",
  "color": "blue",
  dependencies: [arbalester_research.name,],
}