import { Technology } from 'src/app/models/technology.model';
import { hussar_research } from './hussar_research';

export const hussar: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "hussar",
  "age": "imperial",
  "color": "blue",
  dependencies: [hussar_research.name]
}