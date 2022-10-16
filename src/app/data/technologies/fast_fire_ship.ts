
import { Technology } from 'src/app/models/technology.model'
import { fast_fire_ship_research } from './fast_fire_ship_research'
export const fast_fire_ship: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "fast fire ship",
  "age": "imperial",
  "color": "blue",
  dependencies: [fast_fire_ship_research.name,]
}
