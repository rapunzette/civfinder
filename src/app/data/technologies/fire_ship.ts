
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { fire_galley } from './fire_galley'
export const fire_ship: Technology = {
  "name": "fire ship",
  "age": "castle",
  "color": "blue",
  dependencies: [fire_galley.name,]
}
