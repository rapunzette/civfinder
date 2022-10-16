
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const monk: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "monk",
  "age": "castle",
  "color": "blue",
  dependencies: [monastery.name]
}
