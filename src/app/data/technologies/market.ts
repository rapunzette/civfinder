
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
import { mill } from './mill'
export const market: Technology = {
  cost: {
    "wood": 175,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "market",
  "age": "feudal",
  "color": "red",
  dependencies: [mill.name,]
}
