import { Technology } from 'src/app/models/technology.model';
import { elite_steppe_lancer_research } from './elite_steppe_lancer_research';

export const elite_steppe_lancer: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "elite steppe lancer",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_steppe_lancer_research.name,]
}