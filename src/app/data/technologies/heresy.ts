
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const heresy: Technology = {
  cost: {
    "wood": 0,
    "gold": 1000,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name],
  "name": "heresy",
  "age": "castle",
  "color": "green",
}
