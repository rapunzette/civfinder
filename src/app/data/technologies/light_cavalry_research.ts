
import { Technology } from 'src/app/models/technology.model'
import { stable } from './stable'
export const light_cavalry_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "light cavalry research",
  "age": "castle",
  "color": "green",
  dependencies: [stable.name],
}
