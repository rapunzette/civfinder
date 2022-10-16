
import { Technology } from 'src/app/models/technology.model'
import { guard_tower_research } from './guard_tower_research'
export const guard_tower: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [guard_tower_research.name],
  "name": "guard tower",
  "age": "castle",
  "color": "red",
}
