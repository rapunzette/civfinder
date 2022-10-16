
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
export const herbal_medicine: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [monastery.name],
  "name": "herbal medicine",
  "age": "castle",
  "color": "green",
}
