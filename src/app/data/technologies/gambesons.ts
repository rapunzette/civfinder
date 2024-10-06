
import { Technology } from 'src/app/models/technology.model'
import { supplies } from './supplies'
export const gambesons: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 100,
    "stone": 0
  },
  "name": "gambesons",
  "age": "castle",
  "color": "green",
  dependencies: [supplies.name,],
}