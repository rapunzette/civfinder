import { Technology } from 'src/app/models/technology.model';
import { champion_research } from './champion_research';

export const champion: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "champion",
  "age": "imperial",
  "color": "blue",
  dependencies: [champion_research.name],
}