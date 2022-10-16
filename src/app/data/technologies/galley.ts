
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { feudal_age } from './feudal_age'
export const galley: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "galley",
  "age": "feudal",
  "color": "blue",
  dependencies: [dock.name,]
}
