import { Technology } from 'src/app/models/technology.model';
import { elite_steppe_lancer_research } from './elite_steppe_lancer_research';

export const elite_steppe_lancer: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "elite steppe lancer",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_steppe_lancer_research.name,]
}