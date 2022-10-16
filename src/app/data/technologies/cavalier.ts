import { Technology } from 'src/app/models/technology.model';
import { cavalier_research } from './cavalier_research';

export const cavalier: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "cavalier",
  "age": "imperial",
  "color": "blue",
  dependencies: [cavalier_research.name,]
}