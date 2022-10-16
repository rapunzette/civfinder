
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
import { chemistry } from './chemistry'
export const bombard_cannon: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "bombard cannon",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_workshop.name, chemistry.name]
}
