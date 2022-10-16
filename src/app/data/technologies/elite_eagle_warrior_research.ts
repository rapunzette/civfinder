
import { Technology } from 'src/app/models/technology.model'
import { eagle_warrior_research } from './eagle_warrior_research'
export const elite_eagle_warrior_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 500,
    "food": 800,
    "stone": 0
  },
  "name": "elite eagle warrior research",
  "age": "imperial",
  "color": "green",
  dependencies: [eagle_warrior_research.name],
}
