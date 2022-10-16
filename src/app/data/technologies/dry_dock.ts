
import { Technology } from 'src/app/models/technology.model'
import { careening } from './careening'


export const dry_dock: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "dry dock",
  "age": "imperial",
  "color": "green",
  dependencies: [careening.name,]
}
