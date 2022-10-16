import { Technology } from 'src/app/models/technology.model';
import { hussar_research } from './hussar_research';

export const hussar: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "hussar",
  "age": "imperial",
  "color": "blue",
  dependencies: [hussar_research.name]
}