import { Technology } from 'src/app/models/technology.model';
import { two_handed_swordsman_research } from './two_handed_swordsman_research';

export const two_handed_swordsman: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "two handed swordsman",
  "age": "imperial",
  "color": "blue",
  dependencies: [two_handed_swordsman_research.name,],
}