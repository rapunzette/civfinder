
import { Technology } from 'src/app/models/technology.model'
import { castle } from './castle'
export const petard: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "petard",
  "age": "castle",
  "color": "blue",
  dependencies: [castle.name]
}
