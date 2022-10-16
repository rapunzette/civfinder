
import { Technology } from 'src/app/models/technology.model'
import { galleon_research } from './galleon_research'
export const galleon: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [galleon_research.name,]
}
