
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const battering_ram: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "battering ram",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}
