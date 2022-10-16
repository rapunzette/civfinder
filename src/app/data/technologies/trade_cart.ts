
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
export const trade_cart: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "trade cart",
  "age": "feudal",
  "color": "blue",
  dependencies: [market.name]
}
