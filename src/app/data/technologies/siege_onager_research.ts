
import { Technology } from 'src/app/models/technology.model'
import { onager_research } from './onager_research'
export const siege_onager_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "siege onager research",
  "age": "imperial",
  "color": "green",
  dependencies: [onager_research.name],
}
