import { Technology } from 'src/app/models/technology.model';
import { crossbowman_research } from './crossbowman_research';

export const crossbowman: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "crossbowman",
  "age": "castle",
  "color": "blue",
  dependencies: [crossbowman_research.name,],
}