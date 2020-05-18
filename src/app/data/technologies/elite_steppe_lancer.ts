import { Technology } from 'src/app/models/technology.model';
import { elite_steppe_lancer_research } from './elite_steppe_lancer_research';

export const elite_steppe_lancer: Technology = {
  "name": "elite steppe lancer",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_steppe_lancer_research.name,]
}