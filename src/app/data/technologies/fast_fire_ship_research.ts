
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const fast_fire_ship_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "fast fire ship research",
  "age": "imperial",
  "color": "green",
  dependencies: [war_galley_research.name],
}
