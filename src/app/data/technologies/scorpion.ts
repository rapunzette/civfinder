
import { Technology } from 'src/app/models/technology.model'
import { siege_workshop } from './siege_workshop'
export const scorpion: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "scorpion",
  "age": "castle",
  "color": "blue",
  dependencies: [siege_workshop.name]
}
