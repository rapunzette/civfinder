
import { Technology } from 'src/app/models/technology.model'
import { mill } from './mill'
import { feudal_age } from './feudal_age'
export const horse_collar: Technology = {
  cost: {
    "wood": 75,
    "gold": 0,
    "food": 75,
    "stone": 0
  },
  "name": "horse collar",
  "age": "feudal",
  "color": "green",
  dependencies: [mill.name,]
}
