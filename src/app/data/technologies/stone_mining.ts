
import { Technology } from 'src/app/models/technology.model'
import { mining_camp } from './mining_camp'
import { feudal_age } from './feudal_age'
export const stone_mining: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "stone mining",
  "age": "feudal",
  "color": "green",
  dependencies: [mining_camp.name,],
}
