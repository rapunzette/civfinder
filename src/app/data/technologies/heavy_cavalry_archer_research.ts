
import { Technology } from 'src/app/models/technology.model'
import { archery_range } from './archery_range'
export const heavy_cavalry_archer_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "heavy cavalry archer research",
  "age": "imperial",
  "color": "green",
  dependencies: [archery_range.name],
}
