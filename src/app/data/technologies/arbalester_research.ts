
import { Technology } from 'src/app/models/technology.model'
import { crossbowman_research } from './crossbowman_research'
export const arbalester_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "arbalester research",
  "age": "imperial",
  "color": "green",
  dependencies: [crossbowman_research.name],
}
