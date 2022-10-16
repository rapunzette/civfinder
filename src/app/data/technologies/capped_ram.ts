
import { Technology } from 'src/app/models/technology.model'
import { capped_ram_research } from './capped_ram_research'
export const capped_ram: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "capped ram",
  "age": "imperial",
  "color": "blue",
  dependencies: [capped_ram_research.name,]
}
