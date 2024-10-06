
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const fortified_church: Technology = {
  cost: {
    "wood": 200,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name],
  "name": "fortified church",
  "age": "castle",
  "color": "red",
}
