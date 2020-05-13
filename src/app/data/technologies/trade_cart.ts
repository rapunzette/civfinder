
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
export const trade_cart: Technology = {
  "name": "trade cart",
  "age": "feudal",
  "color": "blue",
  dependencies: [market.name]
}
