
import { Technology } from 'src/app/models/technology.model'
import { fishing_ship } from './fishing_ship'
import { feudal_age } from './feudal_age'
export const fish_trap: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "fish trap",
  "age": "feudal",
  "color": "red",
  dependencies: [fishing_ship.name,]
}
