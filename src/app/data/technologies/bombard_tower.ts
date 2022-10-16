
import { Technology } from 'src/app/models/technology.model'
import { bombard_tower_research } from './bombard_tower_research'
export const bombard_tower: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "bombard tower",
  "age": "imperial",
  "color": "red",
  dependencies: [bombard_tower_research.name]
}
