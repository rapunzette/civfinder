
import { Technology } from 'src/app/models/technology.model'


import { leather_archer_armor } from './leather_archer_armor'
export const ring_archer_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [, leather_archer_armor.name],
  "name": "ring archer armor",
  "age": "imperial",
  "color": "green",
}
