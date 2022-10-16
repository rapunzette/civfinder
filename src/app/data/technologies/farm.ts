
import { Technology } from 'src/app/models/technology.model'
import { mill } from './mill'
export const farm: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "farm",
  "age": "dark",
  "color": "red",
  dependencies: [mill.name]
}
