
import { Technology } from 'src/app/models/technology.model'
import { onager_research } from './onager_research'
export const siege_onager_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "siege onager research",
  "age": "imperial",
  "color": "green",
  dependencies: [onager_research.name],
}
