
import { Technology } from 'src/app/models/technology.model'
import { fishing_ship } from './fishing_ship'
import { feudal_age } from './feudal_age'
export const fish_trap: Technology = {
  "name": "fish trap",
  "age": "feudal",
  "color": "red",
  dependencies: [fishing_ship.name, feudal_age.name]
}
