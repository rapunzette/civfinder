
import { Technology } from 'src/app/models/technology.model'
import { stable } from './stable'
export const elite_battle_elephant_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 900,
    "food": 1200,
    "stone": 0
  },
  "name": "elite battle elephant research",
  "age": "imperial",
  "color": "green",
  dependencies: [stable.name],
}
