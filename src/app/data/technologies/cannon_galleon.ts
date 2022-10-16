
import { Technology } from 'src/app/models/technology.model'
import { cannon_galleon_research } from './cannon_galleon_research'
export const cannon_galleon: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [cannon_galleon_research.name,]
}
