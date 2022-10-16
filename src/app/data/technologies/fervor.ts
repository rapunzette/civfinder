
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const fervor: Technology = {
  cost: {
    "wood": 0,
    "gold": 140,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name],
  "name": "fervor",
  "age": "castle",
  "color": "green",
}
