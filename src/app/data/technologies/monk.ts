
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const monk: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "monk",
  "age": "castle",
  "color": "blue",
  dependencies: [monastery.name]
}
