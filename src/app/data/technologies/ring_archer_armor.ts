
import { Technology } from 'src/app/models/technology.model'


import { leather_archer_armor } from './leather_archer_armor'
export const ring_archer_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 250,
    "food": 250,
    "stone": 0
  },
  dependencies: [, leather_archer_armor.name],
  "name": "ring archer armor",
  "age": "imperial",
  "color": "green",
}
