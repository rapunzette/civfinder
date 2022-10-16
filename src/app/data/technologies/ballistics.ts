
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const ballistics: Technology = {
  cost: {
    "wood": 300,
    "gold": 175,
    "food": 0,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "ballistics",
  "age": "castle",
  "color": "green",
}
