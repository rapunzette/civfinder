
import { Technology } from 'src/app/models/technology.model'
import { cavalier_research } from './cavalier_research'
export const paladin_research: Technology = {
  cost: {
    "wood": 0,
    "gold": 750,
    "food": 1300,
    "stone": 0
  },
  "name": "paladin research",
  "age": "imperial",
  "color": "green",
  dependencies: [cavalier_research.name],
}
