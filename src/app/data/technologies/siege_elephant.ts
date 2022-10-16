import { Technology } from 'src/app/models/technology.model';
import { siege_elephant_research } from './siege_elephant_research';

export const siege_elephant: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "siege elephant",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_elephant_research.name],
}