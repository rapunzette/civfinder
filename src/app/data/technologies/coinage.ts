
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'

export const coinage: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 200,
    "stone": 0
  },
  "name": "coinage",
  "age": "castle",
  "color": "green",
  dependencies: [market.name,]
}
