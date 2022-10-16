import { Technology } from 'src/app/models/technology.model';
import { elephant_archer } from './elephant_archer';

export const elite_elephant_archer_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "elite elephant archer research",
  "age": "imperial",
  "color": "green",
  dependencies: [elephant_archer.name],
}