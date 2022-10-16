import { Technology } from 'src/app/models/technology.model';
import { elephant_archer } from './elephant_archer';

export const elite_elephant_archer_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "elite elephant archer research",
  "age": "imperial",
  "color": "green",
  dependencies: [elephant_archer.name],
}