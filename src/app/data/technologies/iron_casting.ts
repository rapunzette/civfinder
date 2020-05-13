
import { Technology } from 'src/app/models/technology.model'
import { forging } from './forging'
import { castle_age } from './castle_age'
export const iron_casting: Technology = {
  "name": "iron casting",
  "age": "castle",
  "color": "green",
  dependencies: [forging.name, castle_age.name]
}
