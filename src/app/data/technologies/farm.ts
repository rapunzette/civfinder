
import { Technology } from 'src/app/models/technology.model'
import { mill } from './mill'
export const farm: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "farm",
  "age": "dark",
  "color": "red",
  dependencies: [mill.name]
}
