
import { Technology } from 'src/app/models/technology.model'


import { dock } from './dock'
export const shipwright: Technology = {
  cost: {
    "wood": 0,
    "gold": 300,
    "food": 1000,
    "stone": 0
  },
  "name": "shipwright",
  "age": "imperial",
  "color": "green",
  dependencies: [dock.name,]
}
