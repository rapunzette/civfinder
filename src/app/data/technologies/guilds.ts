
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'


export const guilds: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "guilds",
  "age": "imperial",
  "color": "green",
  dependencies: [market.name,]
}
