
import { Technology } from 'src/app/models/technology.model'
import { stable } from './stable'
export const elite_battle_elephant_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "elite battle elephant research",
  "age": "imperial",
  "color": "green",
  dependencies: [stable.name],
}
