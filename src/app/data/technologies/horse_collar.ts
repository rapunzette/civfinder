
import { Technology } from 'src/app/models/technology.model'
import { mill } from './mill'
import { feudal_age } from './feudal_age'
export const horse_collar: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "horse collar",
  "age": "feudal",
  "color": "green",
  dependencies: [mill.name,]
}
