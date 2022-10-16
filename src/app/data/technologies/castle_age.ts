
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
export const castle_age: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 800,
    "stone": 0
  },
  "name": "castle age",
  "age": "castle",
  "color": "transparent",
  dependencies: [feudal_age.name]
}
