
import { Technology } from 'src/app/models/technology.model'
import { two_handed_swordsman_research } from './two_handed_swordsman_research'
export const champion_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "champion research",
  "age": "imperial",
  "color": "green",
  dependencies: [two_handed_swordsman_research.name],
}
