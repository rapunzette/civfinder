
import { Technology } from 'src/app/models/technology.model'
import { forging } from './forging'

export const iron_casting: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "iron casting",
  "age": "castle",
  "color": "green",
  dependencies: [forging.name,]
}
