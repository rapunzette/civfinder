
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const murder_holes: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 200,
    "stone": 100
  },
  dependencies: [university.name,],
  "name": "murder holes",
  "age": "castle",
  "color": "green",
}
