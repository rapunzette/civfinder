
import { Technology } from 'src/app/models/technology.model'
import { capped_ram_research } from './capped_ram_research'
export const siege_ram_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "siege ram research",
  "age": "imperial",
  "color": "green",
  dependencies: [capped_ram_research.name],
}
