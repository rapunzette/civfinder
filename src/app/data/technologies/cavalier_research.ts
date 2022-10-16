
import { Technology } from 'src/app/models/technology.model'
import { stable } from './stable'
export const cavalier_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "cavalier research",
  "age": "imperial",
  "color": "green",
  dependencies: [stable.name],
}
