import { Technology } from 'src/app/models/technology.model';
import { eagle_warrior_research } from './eagle_warrior_research';

export const eagle_warrior: Technology = {
  "name": "eagle warrior",
  "age": "castle",
  "color": "blue",
  dependencies: [eagle_warrior_research.name,],
}