
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
import { imperial_age } from './imperial_age'
export const guilds: Technology = {
  "name": "guilds",
  "age": "imperial",
  "color": "green",
  dependencies: [market.name,]
}
