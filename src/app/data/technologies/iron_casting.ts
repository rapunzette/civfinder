
import { Technology } from 'src/app/models/technology.model'
import { forging } from './forging'
import { castle_age } from './castle_age'
export const iron_casting: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "iron casting",
  "age": "castle",
  "color": "green",
  dependencies: [forging.name,]
}
