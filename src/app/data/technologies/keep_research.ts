
import { Technology } from 'src/app/models/technology.model'
import { guard_tower_research } from './guard_tower_research'
export const keep_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "keep research",
  "age": "imperial",
  "color": "green",
  dependencies: [guard_tower_research.name,],
}
