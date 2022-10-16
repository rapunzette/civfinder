
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
export const trade_cart: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "trade cart",
  "age": "feudal",
  "color": "blue",
  dependencies: [market.name]
}
