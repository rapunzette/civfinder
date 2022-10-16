import { Technology } from 'src/app/models/technology.model';
import { eagle_warrior_research } from './eagle_warrior_research';

export const eagle_warrior: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "eagle warrior",
  "age": "castle",
  "color": "blue",
  dependencies: [eagle_warrior_research.name,],
}