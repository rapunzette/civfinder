
import { Technology } from 'src/app/models/technology.model'
import { light_cavalry_research } from './light_cavalry_research'
export const hussar_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "hussar research",
  "age": "imperial",
  "color": "green",
  dependencies: [light_cavalry_research.name],
}
