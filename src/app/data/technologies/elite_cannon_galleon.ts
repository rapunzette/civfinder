
import { Technology } from 'src/app/models/technology.model'
import { elite_cannon_galleon_research } from './elite_cannon_galleon_research'
export const elite_cannon_galleon: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "elite cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_cannon_galleon_research.name]
}
