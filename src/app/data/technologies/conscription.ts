
import { Technology } from 'src/app/models/technology.model'


import { castle } from './castle'
export const conscription: Technology = {
  cost: {
    "wood": 0,
    "gold": 150,
    "food": 150,
    "stone": 0
  },
  "name": "conscription",
  "age": "imperial",
  "color": "green",
  dependencies: [, castle.name]
}
