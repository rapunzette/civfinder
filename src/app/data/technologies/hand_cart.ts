
import { Technology } from 'src/app/models/technology.model'
import { wheelbarrow } from './wheelbarrow'
import { castle_age } from './castle_age'
export const hand_cart: Technology = {
  dependencies: [wheelbarrow.name,],
  "name": "hand cart",
  "age": "castle",
  "color": "green",
}
