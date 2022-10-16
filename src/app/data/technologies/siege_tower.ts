
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const siege_tower: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "siege tower",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}
