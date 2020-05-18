import { Technology } from 'src/app/models/technology.model';
import { elite_eagle_warrior_research } from './elite_eagle_warrior_research';

export const elite_eagle_warrior: Technology = {
  "name": "elite eagle warrior",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_eagle_warrior_research.name,],
}