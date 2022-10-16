
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const feudal_age: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "feudal age",
  "age": "feudal",
  "color": "transparent",
  dependencies: [dark_age.name]
}
