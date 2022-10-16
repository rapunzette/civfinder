import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const sanctity: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name],
  "name": "sanctity",
  "age": "castle",
  "color": "green",
}
