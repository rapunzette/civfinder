import { Technology } from 'src/app/models/technology.model';
import { arbalester_research } from './arbalester_research';

export const arbalester: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "arbalester",
  "age": "imperial",
  "color": "blue",
  dependencies: [arbalester_research.name,],
}