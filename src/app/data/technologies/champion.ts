import { Technology } from 'src/app/models/technology.model';
import { champion_research } from './champion_research';

export const champion: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "champion",
  "age": "imperial",
  "color": "blue",
  dependencies: [champion_research.name],
}