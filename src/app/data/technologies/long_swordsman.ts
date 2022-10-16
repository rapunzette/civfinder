import { Technology } from 'src/app/models/technology.model';
import { long_swordsman_research } from './long_swordsman_research';

export const long_swordsman: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "long swordsman",
  "age": "castle",
  "color": "blue",
  "dependencies": [long_swordsman_research.name,],
}