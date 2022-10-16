
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
import { castle_age } from './castle_age'
export const caravan: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "caravan",
  "age": "castle",
  "color": "green",
  dependencies: [market.name,]
}
