
import { Technology } from 'src/app/models/technology.model'
import { capped_ram_research } from './capped_ram_research'
export const siege_ram_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 1000,
    "stone": 0
  },
  "name": "siege ram research",
  "age": "imperial",
  "color": "green",
  dependencies: [capped_ram_research.name],
}
