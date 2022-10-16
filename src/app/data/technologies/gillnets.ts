
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'

export const gillnets: Technology = {
  cost: {
    "wood": 200,
    "gold": 0,
    "food": 150,
    "stone": 0
  },
  "name": "gillnets",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name,]
}
