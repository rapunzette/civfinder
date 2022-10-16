
import { Technology } from 'src/app/models/technology.model'
import { archery_range } from './archery_range'
export const elite_skirmisher_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "elite skirmisher research",
  "age": "castle",
  "color": "green",
  dependencies: [archery_range.name],
}
