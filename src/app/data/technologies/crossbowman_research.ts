
import { Technology } from 'src/app/models/technology.model'
import { archery_range } from './archery_range'
export const crossbowman_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "crossbowman research",
  "age": "castle",
  "color": "green",
  dependencies: [archery_range.name],
}
