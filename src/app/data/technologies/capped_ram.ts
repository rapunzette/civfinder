
import { Technology } from 'src/app/models/technology.model'
import { capped_ram_research } from './capped_ram_research'
export const capped_ram: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "capped ram",
  "age": "imperial",
  "color": "blue",
  dependencies: [capped_ram_research.name,]
}
