
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const fast_fire_ship_research: Technology = {
  cost: {
    "wood": 280,
    "gold": 250,
    "food": 0,
    "stone": 0
  },
  "name": "fast fire ship research",
  "age": "imperial",
  "color": "green",
  dependencies: [war_galley_research.name],
}
