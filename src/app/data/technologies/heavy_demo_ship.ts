
import { Technology } from 'src/app/models/technology.model'
import { demolition_ship } from './demolition_ship'
import { imperial_age } from './imperial_age'
export const heavy_demo_ship: Technology = {
  "name": "heavy demo ship",
  "age": "imperial",
  "color": "blue",
  dependencies: [demolition_ship.name,]
}
