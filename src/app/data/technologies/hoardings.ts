
import { Technology } from 'src/app/models/technology.model'


import { castle } from './castle'
export const hoardings: Technology = {
  cost: {
    "wood": 400,
    "gold": 0,
    "food": 400,
    "stone": 0
  },
  "name": "hoardings",
  "age": "imperial",
  "color": "green",
  dependencies: [, castle.name]
}
