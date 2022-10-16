
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
export const bombard_tower_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "bombard tower research",
  "age": "imperial",
  "color": "green",
  dependencies: [chemistry.name],
}
