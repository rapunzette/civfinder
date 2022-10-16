
import { Technology } from 'src/app/models/technology.model'
import { barracks } from './barracks'
export const man_at_arms_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "man at arms research",
  "age": "feudal",
  "color": "green",
  dependencies: [barracks.name],
}
