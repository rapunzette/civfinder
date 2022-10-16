
import { Technology } from 'src/app/models/technology.model'
import { siege_ram_research } from './siege_ram_research'
export const siege_ram: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "siege ram",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_ram_research.name]
}
