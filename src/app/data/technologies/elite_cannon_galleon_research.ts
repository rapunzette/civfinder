
import { Technology } from 'src/app/models/technology.model'
import { cannon_galleon_research } from './cannon_galleon_research'
export const elite_cannon_galleon_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "elite cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [cannon_galleon_research.name],
}
