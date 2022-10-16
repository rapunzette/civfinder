import { Technology } from 'src/app/models/technology.model';
import { cavalier_research } from './cavalier_research';

export const cavalier: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "cavalier",
  "age": "imperial",
  "color": "blue",
  dependencies: [cavalier_research.name,]
}