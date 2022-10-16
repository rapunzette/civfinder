
import { Technology } from 'src/app/models/technology.model'
import { siege_onager_research } from './siege_onager_research'
export const siege_onager: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "siege onager",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_onager_research.name]
}
