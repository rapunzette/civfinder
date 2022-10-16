
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const guard_tower_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "guard tower research",
  "age": "castle",
  "color": "green",
  dependencies: [university.name],
}
