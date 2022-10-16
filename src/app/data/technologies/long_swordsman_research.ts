
import { Technology } from 'src/app/models/technology.model'
import { man_at_arms_research } from './man_at_arms_research'
export const long_swordsman_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "long swordsman research",
  "age": "castle",
  "color": "green",
  dependencies: [man_at_arms_research.name],
}
