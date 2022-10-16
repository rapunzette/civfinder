
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const war_galley: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "war galley",
  "age": "castle",
  "color": "blue",
  dependencies: [war_galley_research.name,]
}
