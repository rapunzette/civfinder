
import { Technology } from 'src/app/models/technology.model'
import { light_cavalry_research } from './light_cavalry_research'
export const hussar_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "hussar research",
  "age": "imperial",
  "color": "green",
  dependencies: [light_cavalry_research.name],
}
