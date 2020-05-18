
import { Technology } from 'src/app/models/technology.model'
import { elite_cannon_galleon_research } from './elite_cannon_galleon_research'
export const elite_cannon_galleon: Technology = {
  "name": "elite cannon galleon",
  "age": "imperial",
  "color": "blue",
  dependencies: [elite_cannon_galleon_research.name]
}
