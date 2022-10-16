
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const masonry: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "masonry",
  "age": "castle",
  "color": "green",
}
