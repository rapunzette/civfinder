
import { Technology } from 'src/app/models/technology.model'
import { gold_mining } from './gold_mining'

export const gold_shaft_mining: Technology = {
  cost: {
    "wood": 150,
    "gold": 0,
    "food": 200,
    "stone": 0
  },
  "name": "gold shaft mining",
  "age": "castle",
  "color": "green",
  dependencies: [gold_mining.name,],
}
