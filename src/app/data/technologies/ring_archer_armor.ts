
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { leather_archer_armor } from './leather_archer_armor'
export const ring_archer_armor: Technology = {
  dependencies: [imperial_age.name, leather_archer_armor.name],
  "name": "ring archer armor",
  "age": "imperial",
  "color": "green",
}
