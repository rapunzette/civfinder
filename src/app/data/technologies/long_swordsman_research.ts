
import { Technology } from 'src/app/models/technology.model'
import { man_at_arms_research } from './man_at_arms_research'
export const long_swordsman_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 65,
    "food": 150,
    "stone": 0
  },
  "name": "long swordsman research",
  "age": "castle",
  "color": "green",
  dependencies: [man_at_arms_research.name],
}
