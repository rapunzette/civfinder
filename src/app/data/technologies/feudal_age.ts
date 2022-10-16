
import { Technology } from 'src/app/models/technology.model'
import { dark_age } from './dark_age'
export const feudal_age: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "feudal age",
  "age": "feudal",
  "color": "transparent",
  dependencies: [dark_age.name]
}
