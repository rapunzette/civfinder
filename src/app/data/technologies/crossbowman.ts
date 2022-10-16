import { Technology } from 'src/app/models/technology.model';
import { crossbowman_research } from './crossbowman_research';

export const crossbowman: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "crossbowman",
  "age": "castle",
  "color": "blue",
  dependencies: [crossbowman_research.name,],
}