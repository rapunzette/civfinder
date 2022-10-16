
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const masonry: Technology = {
  cost: {
    "wood": 175,
    "gold": 0,
    "food": 150,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "masonry",
  "age": "castle",
  "color": "green",
}
