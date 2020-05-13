
import { Technology } from 'src/app/models/technology.model'
import { gold_mining } from './gold_mining'
import { castle_age } from './castle_age'
export const gold_shaft_mining: Technology = {
  "name": "gold shaft mining",
  "age": "castle",
  "color": "green",
  dependencies: [gold_mining.name, castle_age.name],
}
