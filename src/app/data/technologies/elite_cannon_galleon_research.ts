
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
export const elite_cannon_galleon_research: Technology = {
  cost: {
    "wood": 525,
    "gold": 500,
    "food": 0,
    "stone": 0
  },
  "name": "elite cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [chemistry.name],
}
