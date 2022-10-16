
import { Technology } from 'src/app/models/technology.model'
import { stable } from './stable'
export const cavalier_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "cavalier research",
  "age": "imperial",
  "color": "green",
  dependencies: [stable.name],
}
