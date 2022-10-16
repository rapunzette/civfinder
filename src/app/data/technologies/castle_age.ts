
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
export const castle_age: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "castle age",
  "age": "castle",
  "color": "transparent",
  dependencies: [feudal_age.name]
}
