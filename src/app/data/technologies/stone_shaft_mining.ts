
import { Technology } from 'src/app/models/technology.model'

import { stone_mining } from './stone_mining'
export const stone_shaft_mining: Technology = {
  cost: {
    "wood": 150,
    "gold": 0,
    "food": 200,
    "stone": 0
  },
  "name": "stone shaft mining",
  "age": "castle",
  "color": "green",
  dependencies: [stone_mining.name,],
}
