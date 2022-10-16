
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'
export const man_at_arms_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "man at arms research",
  "age": "feudal",
  "color": "green",
  dependencies: [barracks.name],
}
