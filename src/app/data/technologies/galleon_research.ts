
import { Technology } from 'src/app/models/technology.model'
import { war_galley_research } from './war_galley_research'
export const galleon_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [war_galley_research.name],
}
