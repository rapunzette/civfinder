
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { stone_mining } from './stone_mining'
export const stone_shaft_mining: Technology = {
  "name": "stone shaft mining",
  "age": "castle",
  "color": "green",
  dependencies: [stone_mining.name, castle_age.name],
}
