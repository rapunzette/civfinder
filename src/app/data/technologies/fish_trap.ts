
import { Technology } from 'src/app/models/technology.model'
import { fishing_ship } from './fishing_ship'
export const fish_trap: Technology = {
  cost: {
    "wood": 100,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "fish trap",
  "age": "feudal",
  "color": "red",
  dependencies: [fishing_ship.name,]
}
