
import { Technology } from 'src/app/models/technology.model'
import { careening } from './careening'


export const dry_dock: Technology = {
  cost: {
    "wood": 0,
    "gold": 400,
    "food": 600,
    "stone": 0
  },
  "name": "dry dock",
  "age": "imperial",
  "color": "green",
  dependencies: [careening.name,]
}
