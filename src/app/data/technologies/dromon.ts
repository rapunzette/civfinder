
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const dromon: Technology = {
  cost: {
    "wood": 175,
    "gold": 150,
    "food": 0,
    "stone": 0
  },
  "name": "dromon",
  "age": "imperial",
  "color": "blue",
  dependencies: [dock.name,]
}
