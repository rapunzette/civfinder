import { Technology } from 'src/app/models/technology.model';
import { elite_battle_elephant_research } from './elite_battle_elephant_research';

export const elite_battle_elephant: Technology = {
  "name": "elite battle elephant",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_battle_elephant_research.name]
}