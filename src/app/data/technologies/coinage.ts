
import { Technology } from 'src/app/models/technology.model'
import { market } from './market'
import { castle_age } from './castle_age'
export const coinage: Technology = {
  "name": "coinage",
  "age": "castle",
  "color": "green",
  dependencies: [market.name, castle_age.name]
}
