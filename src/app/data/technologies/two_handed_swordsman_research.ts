
import { Technology } from 'src/app/models/technology.model'
import { long_swordsman_research } from './long_swordsman_research'
export const two_handed_swordsman_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 300,
    "stone": 0
  },
  "name": "two handed swordsman research",
  "age": "imperial",
  "color": "green",
  dependencies: [long_swordsman_research.name],
}
