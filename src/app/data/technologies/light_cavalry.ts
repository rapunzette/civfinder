import { Technology } from 'src/app/models/technology.model';
import { light_cavalry_research } from './light_cavalry_research';

export const light_cavalry: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "light cavalry",
  "age": "castle",
  "color": "blue",
  dependencies: [light_cavalry_research.name]
}