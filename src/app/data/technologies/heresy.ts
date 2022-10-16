
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const heresy: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [monastery.name],
  "name": "heresy",
  "age": "castle",
  "color": "green",
}
