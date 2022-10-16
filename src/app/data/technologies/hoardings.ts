
import { Technology } from 'src/app/models/technology.model'


import { castle } from './castle'
export const hoardings: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "hoardings",
  "age": "imperial",
  "color": "green",
  dependencies: [, castle.name]
}
