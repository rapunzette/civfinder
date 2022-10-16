
import { Technology } from 'src/app/models/technology.model'
import { heavy_demo_ship_research } from './heavy_demo_ship_research'
export const heavy_demo_ship: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "heavy demo ship",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_demo_ship_research.name,]
}
