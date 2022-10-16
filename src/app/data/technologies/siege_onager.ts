
import { Technology } from 'src/app/models/technology.model'
import { siege_onager_research } from './siege_onager_research'
export const siege_onager: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "siege onager",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_onager_research.name]
}
