
import { Technology } from 'src/app/models/technology.model'
import { lumber_camp } from './lumber_camp'
export const double_bit_axe: Technology = {
  cost: {
    "wood": 50,
    "gold": 0,
    "food": 100,
    "stone": 0
  },
  "name": "double bit axe",
  "age": "feudal",
  "color": "green",
  dependencies: [lumber_camp.name,]
}
