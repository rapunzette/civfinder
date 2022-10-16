
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const guard_tower_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "guard tower research",
  "age": "castle",
  "color": "green",
  dependencies: [university.name],
}
