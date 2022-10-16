
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { stone_mining } from './stone_mining'
export const stone_shaft_mining: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "stone shaft mining",
  "age": "castle",
  "color": "green",
  dependencies: [stone_mining.name,],
}
