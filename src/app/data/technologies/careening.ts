
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'

export const careening: Technology = {
  cost: {
    "wood": 0,
    "gold": 150,
    "food": 250,
    "stone": 0
  },
  "name": "careening",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name,]
}
