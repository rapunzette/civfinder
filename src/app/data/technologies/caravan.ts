
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
export const caravan: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 200,
    "stone": 0
  },
  "name": "caravan",
  "age": "castle",
  "color": "green",
  dependencies: [market.name,]
}
