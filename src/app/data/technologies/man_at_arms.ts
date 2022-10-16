import { Technology } from 'src/app/models/technology.model';
import { man_at_arms_research } from './man_at_arms_research';

export const man_at_arms: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "man at arms",
  "age": "feudal",
  "color": "blue",
  dependencies: [man_at_arms_research.name,]
}