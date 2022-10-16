
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const siege_tower: Technology = {
  cost: {
    "wood": 200,
    "gold": 160,
    "food": 0,
    "stone": 0
  },
  "name": "siege tower",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}
