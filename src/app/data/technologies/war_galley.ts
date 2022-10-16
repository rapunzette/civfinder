
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const war_galley: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "war galley",
  "age": "castle",
  "color": "blue",
  dependencies: [war_galley_research.name,]
}
