
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { fire_ship } from './fire_ship'
export const fast_fire_ship: Technology = {
  "name": "fast fire ship",
  "age": "imperial",
  "color": "blue",
  dependencies: [fire_ship.name,]
}
