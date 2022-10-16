
import { Technology } from 'src/app/models/technology.model'
import { wheelbarrow } from './wheelbarrow'

export const hand_cart: Technology = {
  cost: {
    "wood": 200,
    "gold": 0,
    "food": 300,
    "stone": 0
  },
  dependencies: [wheelbarrow.name,],
  "name": "hand cart",
  "age": "castle",
  "color": "green",
}
