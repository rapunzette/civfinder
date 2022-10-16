
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
import { chemistry } from './chemistry'
export const bombard_cannon: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "bombard cannon",
  "age": "imperial",
  "color": "blue",
  dependencies: [siege_workshop.name, chemistry.name]
}
