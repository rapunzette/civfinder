
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
import { castle_age } from './castle_age'
export const coinage: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "coinage",
  "age": "castle",
  "color": "green",
  dependencies: [market.name,]
}
