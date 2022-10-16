import { Technology } from 'src/app/models/technology.model';
import { elite_eagle_warrior_research } from './elite_eagle_warrior_research';

export const elite_eagle_warrior: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "elite eagle warrior",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_eagle_warrior_research.name,],
}