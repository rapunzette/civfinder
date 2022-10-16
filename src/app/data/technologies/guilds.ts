
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'


export const guilds: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "guilds",
  "age": "imperial",
  "color": "green",
  dependencies: [market.name,]
}
