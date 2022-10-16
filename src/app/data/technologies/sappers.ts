
import { Technology } from 'src/app/models/technology.model'


import { castle } from './castle'
export const sappers: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 400,
    "stone": 0
  },
  "name": "sappers",
  "age": "imperial",
  "color": "green",
  dependencies: [, castle.name]
}
