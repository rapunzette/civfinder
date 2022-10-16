
import { Technology } from 'src/app/models/technology.model'
import { lumber_camp } from './lumber_camp'
import { feudal_age } from './feudal_age'
export const double_bit_axe: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "double bit axe",
  "age": "feudal",
  "color": "green",
  dependencies: [lumber_camp.name,]
}
