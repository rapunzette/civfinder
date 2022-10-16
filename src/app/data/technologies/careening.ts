
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { castle_age } from './castle_age'
export const careening: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "careening",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name,]
}
