
import { Technology } from 'src/app/models/technology.model'
import { onager_research } from './onager_research'
export const siege_onager_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 1000,
    "food": 1450,
    "stone": 0
  },
  "name": "siege onager research",
  "age": "imperial",
  "color": "green",
  dependencies: [onager_research.name],
}
