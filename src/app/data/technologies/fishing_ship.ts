
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
export const fishing_ship: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "fishing ship",
  "age": "dark",
  "color": "blue",
  dependencies: [dock.name]
}
