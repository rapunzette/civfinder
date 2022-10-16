
import { Technology } from 'src/app/models/technology.model'
import { galleon_research } from './galleon_research'
export const galleon: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [galleon_research.name,]
}
