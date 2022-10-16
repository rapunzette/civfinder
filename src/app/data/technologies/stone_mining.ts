
import { Technology } from 'src/app/models/technology.model'
import { mining_camp } from './mining_camp'
import { feudal_age } from './feudal_age'
export const stone_mining: Technology = {
  cost: {
    "wood": 75,
    "gold": 0,
    "food": 100,
    "stone": 0
  },
  "name": "stone mining",
  "age": "feudal",
  "color": "green",
  dependencies: [mining_camp.name,],
}
