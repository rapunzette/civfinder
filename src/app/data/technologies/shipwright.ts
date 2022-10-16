
import { Technology } from 'src/app/models/technology.model'


import { dock } from './dock'
export const shipwright: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "shipwright",
  "age": "imperial",
  "color": "green",
  dependencies: [dock.name,]
}
