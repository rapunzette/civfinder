
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { scale_barding_armor } from './scale_barding_armor'
export const chain_barding_armor: Technology = {
  "name": "chain barding armor",
  "age": "castle",
  "color": "green",
  dependencies: [, scale_barding_armor.name]
}
